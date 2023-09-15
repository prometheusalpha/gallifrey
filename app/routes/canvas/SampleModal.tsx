import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function SampleModal(){
  const [opened, { open, close }] = useDisclosure(false);
return (
  <>
  <Modal
    opened={opened}
    onClose={close}
  >

  </Modal>
  </>
)
}
