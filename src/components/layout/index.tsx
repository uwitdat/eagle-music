interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="viewport" content="width=device-width" />
        <meta name="generator" content="test content" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/reset.css" />
      </head>
      <body>{children}</body>
    </html>
  );
};
