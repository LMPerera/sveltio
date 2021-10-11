<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Modal from "./Modal.svelte";
  </script>
  
  <Meta
    title="Sveltio/Modal"
    component={Modal}
    argTypes={{
      backgroundColor: { control: "color" },
      isModalOpen: { control: "boolean" }
    }}
  />
  
  <Template let:args>
    <Modal {...args} />
  </Template>
  
  <Story
    name="Active"
    args={{
      isModalOpen:true
    }}
  />