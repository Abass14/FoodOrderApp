import { View, Text, StyleSheet } from 'react-native';
type Props = {
    children: string,
}
export const Headings = (props: Props) => {
  return (
      <Text>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
    paragraph: {
        fontSize: 12,
        color: 'black'
    }
})

export default Headings;
