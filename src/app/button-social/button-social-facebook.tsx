export interface ButtonSocialFacebookProps {
  children: React.ReactNode;
}

export function ButtonSocialFacebook({ children }: ButtonSocialFacebookProps) {
  return (
    <div className="[--dr-social-button-color-fg_on-brand:#fff] [--dr-social-button-color-bg-brand:#1877F2] [--dr-social-button-color-bg-brand_hover:#0C63D4]">
      {children}
    </div>
  );
}
