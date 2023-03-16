
//create another app and then test it, test the themes, the buttons, the tabs, the dark and light mode, test it all


import { Button, ThemeProvider } from '@rneui/themed';


const TestElements = () => {
  return (
    <ThemeProvider>
      <Button title="Hey!" />
    </ThemeProvider>
  );
};