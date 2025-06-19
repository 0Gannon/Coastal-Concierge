import AppLayout from '@/components/layout/AppLayout';
import ChatInterface from '@/components/chat/ChatInterface';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function ChatPage() {
  return (
    <AppLayout>
      <div className="container mx-auto py-8 px-4 flex flex-col items-center">
        <Card className="w-full max-w-2xl mb-6 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-headline">AI Assistant</CardTitle>
            <CardDescription className="text-lg text-muted-foreground mt-1">
              Ask questions about the property, local area, or request assistance.
            </CardDescription>
          </CardHeader>
        </Card>
        <ChatInterface />
      </div>
    </AppLayout>
  );
}
