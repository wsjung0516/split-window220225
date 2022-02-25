import {DisplayGridTemplateComponent} from "./display-grid-template.component";
import {Meta, moduleMetadata, Story} from "@storybook/angular";
import {GridModule} from "../grid.module";

export default {
  title: 'Grid/DisplayGridTemplate',
  component: DisplayGridTemplateComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports:[GridModule],
      // providers: [Store,StateStream]
    }),
  ]
} as Meta<DisplayGridTemplateComponent>;

const Template: Story<DisplayGridTemplateComponent> = (args: DisplayGridTemplateComponent) => ({
  props: {
    ...args
  },
  template:`
    <display-grid-template [templateName]="templateName" [templateHeight]="templateHeight" >
    </display-grid-template>
  `
});

export const DisplayGridTemplate = Template.bind({});
DisplayGridTemplate.args = {
  templateName: 'element1',
  templateHeight: '82vh'
}
