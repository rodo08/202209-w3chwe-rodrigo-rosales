export type TitleTag = "h1" | "h2" | "h3";

interface ComponentStructure {
  domElement: HTMLElement;
  render: () => void;
  addListeners?: () => void;
}

export default ComponentStructure;
