import type { Reservation } from '@/types';

// Helper to format dates for ICS: YYYYMMDDTHHMMSSZ
const formatDateForICS = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toISOString().replace(/[-:.]/g, '').slice(0, 15) + 'Z';
};

export function generateICSContent(reservation: Reservation): string {
  const uid = `${reservation.id}-${new Date().getTime()}@coastalconcierge.app`;
  const dtstamp = formatDateForICS(new Date().toISOString());
  const dtstart = formatDateForICS(reservation.checkInDate);
  const dtend = formatDateForICS(reservation.checkOutDate);

  const checkInTime = new Date(reservation.checkInDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const checkOutTime = new Date(reservation.checkOutDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // Ensure description lines are not too long (RFC 5545 recommends 75 octets per line)
  // and handle line folding correctly.
  const foldLine = (line: string): string => {
    let result = '';
    let currentLine = '';
    for (let i = 0; i < line.length; i++) {
      currentLine += line[i];
      if (currentLine.length >= 74 && i < line.length -1) { // 74 to leave space for potential CRLF
        result += currentLine + '\\r\\n '; // Note the space for continuation
        currentLine = '';
      }
    }
    result += currentLine;
    return result;
  };
  
  const description = `Reservation for ${reservation.guestName} (${reservation.numberOfGuests} guests). Check-in: ${checkInTime}, Check-out: ${checkOutTime}. Enjoy your stay at ${reservation.propertyName}!`;

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//CoastalConcierge//App//EN',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${dtstamp}`,
    `DTSTART:${dtstart}`,
    `DTEND:${dtend}`,
    foldLine(`SUMMARY:Reservation at ${reservation.propertyName}`),
    foldLine(`LOCATION:${reservation.address}`),
    foldLine(`DESCRIPTION:${description.replace(/\n/g, '\\n')}`), // Escape newlines in description
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  return icsContent;
}
