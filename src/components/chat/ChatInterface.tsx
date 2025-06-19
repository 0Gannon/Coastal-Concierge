'use client';

import { useState, useRef, useEffect } from 'react';
import type { ChatMessage } from '@/types';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Send, User, Bot, AlertTriangle, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { answerGuestInquiry } from '@/ai/flows/answer-guest-inquiry';
import { propertyInformationForAI } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';

export default function ChatInterface() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages]);
  
  // Initial greeting message
  useEffect(() => {
    setMessages([
      {
        id: 'initial-greeting',
        text: "Hello! I'm your Coastal Concierge assistant. How can I help you today?",
        sender: 'ai',
        timestamp: new Date(),
      }
    ]);
  }, []);


  const handleSendMessage = async () => {
    if (inputValue.trim() === '' || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const aiResponse = await answerGuestInquiry({
        guestQuestion: userMessage.text,
        propertyInformation: propertyInformationForAI,
      });

      const aiMessage: ChatMessage = {
        id: `ai-${Date.now()}`,
        text: aiResponse.answer,
        sender: 'ai',
        timestamp: new Date(),
        requiresEscalation: aiResponse.requiresEscalation,
      };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);

      if (aiResponse.requiresEscalation) {
         const escalationMessage: ChatMessage = {
           id: `system-${Date.now()}`,
           text: "It looks like your request requires human assistance. I've notified the property manager.",
           sender: 'system',
           timestamp: new Date(),
         };
         setMessages((prevMessages) => [...prevMessages, escalationMessage]);
      }

    } catch (error) {
      console.error('AI Chat Error:', error);
      const errorMessage: ChatMessage = {
        id: `error-${Date.now()}`,
        text: 'Sorry, I encountered an error. Please try again later.',
        sender: 'system',
        timestamp: new Date(),
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
      toast({
        title: "Chat Error",
        description: "Could not connect to the AI assistant. Please check your connection or try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-12rem)] max-h-[700px] w-full max-w-2xl mx-auto bg-card shadow-xl rounded-lg border">
      <ScrollArea className="flex-grow p-4" ref={scrollAreaRef}>
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={cn(
                'flex items-end gap-2',
                msg.sender === 'user' ? 'justify-end' : 'justify-start'
              )}
            >
              {msg.sender !== 'user' && msg.sender !== 'system' && (
                <Avatar className="h-8 w-8">
                  <AvatarFallback><Bot size={20} /></AvatarFallback>
                </Avatar>
              )}
               {msg.sender === 'system' && (
                <Avatar className="h-8 w-8 bg-destructive/20 text-destructive">
                  <AvatarFallback><AlertTriangle size={20} /></AvatarFallback>
                </Avatar>
              )}
              <div
                className={cn(
                  'max-w-[70%] rounded-xl px-4 py-2.5 text-sm shadow-md',
                  msg.sender === 'user'
                    ? 'bg-primary text-primary-foreground rounded-br-none'
                    : msg.sender === 'ai'
                    ? 'bg-muted text-muted-foreground rounded-bl-none'
                    : 'bg-destructive/10 text-destructive-foreground border border-destructive/30 rounded-bl-none',
                  msg.requiresEscalation && msg.sender === 'ai' && 'border border-amber-500 bg-amber-50'
                )}
              >
                <p className="whitespace-pre-wrap">{msg.text}</p>
                {msg.requiresEscalation && msg.sender === 'ai' && (
                   <p className="text-xs mt-1 text-amber-700 font-medium flex items-center">
                     <AlertTriangle size={14} className="mr-1 inline"/> This may require human assistance.
                   </p>
                )}
              </div>
              {msg.sender === 'user' && (
                 <Avatar className="h-8 w-8">
                  <AvatarFallback><User size={20}/></AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex items-end gap-2 justify-start">
              <Avatar className="h-8 w-8">
                <AvatarFallback><Bot size={20} /></AvatarFallback>
              </Avatar>
              <div className="max-w-[70%] rounded-xl px-4 py-3 bg-muted text-muted-foreground rounded-bl-none shadow-md">
                <Loader2 className="h-5 w-5 animate-spin" />
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
      <div className="border-t p-4 bg-background/50 rounded-b-lg">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-2"
        >
          <Input
            type="text"
            placeholder="Type your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-grow text-base"
            disabled={isLoading}
            aria-label="Chat message input"
          />
          <Button type="submit" size="icon" disabled={isLoading || inputValue.trim() === ''} className="bg-accent hover:bg-accent/90">
            {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
            <span className="sr-only">Send message</span>
          </Button>
        </form>
      </div>
    </div>
  );
}
