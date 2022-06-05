export default function Navigate() {
  const NavigateTo = (path, navigation) => {
    navigation.navigate(path);
  };
  return {NavigateTo};
}
