export interface ButtonSocialAppleProps {
  children: React.ReactNode;
}

export function ButtonSocialApple({ children }: ButtonSocialAppleProps) {
  return (
    <div className="[--dr-social-button-color-bg-brand:#000] [--dr-social-button-color-bg-brand_hover:#000] [--dr-social-button-color-fg_on-brand:#fff]">
      {children}
    </div>
  );
}
