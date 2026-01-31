
export enum BSTFunction {
  TEAM = 'Our Team',
  OVERVIEW = 'Overview',
  INSERT = 'Insert',
  SEARCHING = 'Searching',
  INORDER = 'Inorder Traversal',
  PREORDER = 'Preorder Traversal',
  POSTORDER = 'Postorder Traversal',
  DELETING = 'Deleting',
  PERFORMANCE = 'Performance Analysis'
}

export interface NodeData {
  id: number;
  value: number;
  left?: NodeData;
  right?: NodeData;
}

export interface PageContent {
  title: string;
  description: string;
  scenario?: string;
  scenarioDescription?: string;
  javaCode: string;
  complexity: {
    time: string;
    space: string;
  };
  terminalOutput: string[];
}
