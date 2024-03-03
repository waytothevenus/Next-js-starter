import type { Metadata } from "next";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import AuthSessionProvider from "@components/providers/AuthSessionProvider";
import AntdConfigProvider from "@components/providers/AntdConfigProvider";
import "@styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Full-stack starter template 2024",
  description: "NextJs + NextAuth + Typescript + Mongo DB + Ant Design",
  icons: { icon: "/logos/next-icon.svg" }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <AntdRegistry>
        <AntdConfigProvider>
          <AuthSessionProvider session={session}>
            <body className={inter.className}>
              {children}
            </body>
          </AuthSessionProvider>
        </AntdConfigProvider>
      </AntdRegistry>
    </html>
  );
}