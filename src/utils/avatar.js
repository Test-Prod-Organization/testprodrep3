export function getAvatarUrl(user) {
  if (!user || !user.avatar) {
    return "/images/default-avatar.png";
  }
  return user.avatar;
}