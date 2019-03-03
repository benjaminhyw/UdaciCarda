export default function UdaciStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar transluscent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}
