export type Reminder = {
  id: string;
  date: Date;
  status: "complete" | "overdue" | "in progress";
  task: string;
  remind_me?: "5 minutes before" | "2 hours before" | "1 day before";
};

export const data: Reminder[] = [
  { id: "3u4v5w", date: new Date(Date.UTC(2025, 1, 5, 10, 0, 0, 0)), status: "in progress", task: "Track daily water intake", remind_me: "1 day before" },
  { id: "7o8p9q", date: new Date(Date.UTC(2025, 1, 5, 12, 0, 0, 0)), status: "in progress", task: "Order medical supplies", remind_me: "5 minutes before" },
  { id: "1i2j3k", date: new Date(Date.UTC(2025, 1, 5, 14, 30, 0, 0)), status: "complete", task: "Book dermatology appointment", remind_me: "2 hours before" },
  { id: "5c6d7e", date: new Date(Date.UTC(2025, 1, 5, 13, 0, 0, 0)), status: "complete", task: "Schedule routine blood work", remind_me: "2 hours before" },
  { id: "9w0x1y", date: new Date(Date.UTC(2025, 1, 6, 10, 30, 0, 0)), status: "in progress", task: "Pick up allergy medication", remind_me: "1 day before" },
  { id: "3q4r5s", date: new Date(Date.UTC(2025, 1, 7, 8, 30, 0, 0)), status: "in progress", task: "Get cholesterol test", remind_me: "5 minutes before" },
  { id: "7k8l9m", date: new Date(Date.UTC(2025, 1, 8, 15, 0, 0, 0)), status: "in progress", task: "Confirm specialist appointment", remind_me: "5 minutes before" },
  { id: "1e2f3g", date: new Date(Date.UTC(2025, 1, 9, 9, 30, 0, 0)), status: "in progress", task: "Renew health insurance", remind_me: "5 minutes before" },
  { id: "5y6z7a", date: new Date(Date.UTC(2025, 1, 10, 16, 0, 0, 0)), status: "in progress", task: "Get flu shot", remind_me: "5 minutes before" },
  { id: "9s0t1u", date: new Date(Date.UTC(2025, 1, 11, 13, 0, 0, 0)), status: "in progress", task: "Pick up new eyeglasses", remind_me: "2 hours before" },
  { id: "3m4n5o", date: new Date(Date.UTC(2025, 1, 12, 11, 0, 0, 0)), status: "in progress", task: "Follow up with cardiologist", remind_me: "2 hours before" },
  { id: "7g8h9i", date: new Date(Date.UTC(2025, 1, 13, 10, 0, 0, 0)), status: "in progress", task: "Refill prescription", remind_me: "2 hours before" },
  { id: "4d5e6f", date: new Date(Date.UTC(2025, 1, 14, 14, 30, 0, 0)), status: "overdue", task: "Completed annual checkup", remind_me: "2 hours before" },
  { id: "1a2b3c", date: new Date(Date.UTC(2025, 1, 15, 8, 0, 0, 0)), status: "complete", task: "Take morning medication", remind_me: "1 day before" },
  { id: "0j1k2l", date: new Date(Date.UTC(2025, 1, 16, 9, 0, 0, 0)), status: "complete", task: "Schedule dental cleaning", remind_me: "1 day before" },
  { id: "6p7q8r", date: new Date(Date.UTC(2025, 1, 17, 7, 30, 0, 0)), status: "complete", task: "Take blood pressure reading", remind_me: "2 hours before" },
  { id: "2v3w4x", date: new Date(Date.UTC(2025, 1, 18, 8, 45, 0, 0)), status: "complete", task: "Check blood sugar levels", remind_me: "1 day before" },
  { id: "8b9c0d", date: new Date(Date.UTC(2025, 1, 19, 10, 30, 0, 0)), status: "complete", task: "Attend physical therapy", remind_me: "1 day before" },
  { id: "4h5i6j", date: new Date(Date.UTC(2025, 1, 20, 14, 0, 0, 0)), status: "complete", task: "Schedule vision test", remind_me: "2 hours before" },
  { id: "0n1o2p", date: new Date(Date.UTC(2025, 1, 21, 11, 45, 0, 0)), status: "complete", task: "Review medical test results", remind_me: "2 hours before" },
  { id: "6t7u8v", date: new Date(Date.UTC(2025, 1, 22, 9, 15, 0, 0)), status: "complete", task: "Follow up with primary doctor", remind_me: "5 minutes before" },
  { id: "2z3a4b", date: new Date(Date.UTC(2025, 1, 23, 18, 0, 0, 0)), status: "complete", task: "Take evening medication", remind_me: "5 minutes before" },
  { id: "8f9g0h", date: new Date(Date.UTC(2025, 1, 24, 8, 0, 0, 0)), status: "complete", task: "Call for prescription refill", remind_me: "2 hours before" },
  { id: "4l5m6n", date: new Date(Date.UTC(2025, 1, 25, 7, 45, 0, 0)), status: "complete", task: "Check vaccination records", remind_me: "5 minutes before" },
  { id: "0r1s2t", date: new Date(Date.UTC(2025, 1, 26, 15, 0, 0, 0)), status: "complete", task: "Confirm physiotherapy session", remind_me: "1 day before" },
  { id: "6x7y8z", date: new Date(Date.UTC(2025, 1, 27, 8, 30, 0, 0)), status: "complete", task: "Monitor heart rate", remind_me: "5 minutes before" }
];

