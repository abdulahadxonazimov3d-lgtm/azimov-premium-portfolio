import './globals.css';
import { ThemeProvider } from './components/ThemeProvider';

export const metadata = {
  title: 'Azimov Abdulahadxon | IT Instructor & Full Stack Developer',
  description: 'Azimov Abdulahadxon shaxsiy portfolio sayti. IT Instructor, Full Stack Developer, AI Enthusiast.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
