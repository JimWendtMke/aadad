export interface GuxAvatarType {
  /**
  * When present, it specifies the size of the avatar
  */
  size?: undefined | 'large' | 'xlarge';
  /**
  * Specifies the shape of the avatar
  */
  shape?: 'circle' | 'square';
  /**
  * When present, it specifies the image to be displayed in the avatar
  */
  image?: string;
  /**
  * When present, it specifies the text to be displayed in the avatar
  */
  label?: string;
  /**
  * When present, it specifies the icon to be displayed in the avatar
  */
  icon?: string;
  /**
  * Style of the avatar color
  */
  mode?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'help' | 'danger' | 'light' | 'dark';
}
