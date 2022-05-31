// stories/MyButton.stories.tsx
import React from 'react';
import {ComponentMeta, ComponentStory, Story} from '@storybook/react';
import {StyleSheet, Text, View} from 'react-native';
import Icons from '../../assets/icons/SvgIcons';
import Icon from './Icon';

export default {
  title: 'components/Icon',
  component: Icon,
  args: {
    name: 'google',
    fill: 'gray',
    height: '50',
    width: '50',
  },
  argTypes: {
    fill: {control: 'color'},
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = args => <Icon {...args} />;

export const Default = Template.bind({});

export const Variants: Story = args => {
  return (
    <View style={{flexDirection: 'row'}}>
      <table>
        <tbody>
          {Object.keys(Icons).map(name => (
            <td>
              <View style={styles.variantsTd}>
                <Icon {...args} name={name} />
                <Text>{name}</Text>
              </View>
            </td>
          ))}
        </tbody>
      </table>
    </View>
  );
};

const styles = StyleSheet.create({
  variantsTd: {
    alignItems: 'center',
    marginRight: 1,
  },
});
