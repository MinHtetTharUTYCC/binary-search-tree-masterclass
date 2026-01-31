import { BSTFunction, PageContent } from './types';

export const TEAM_MEMBERS = [
    {
        name: 'Min Htet Thar(Minzo)',
        role: 'Java Developer',
        img: 'https://lh3.googleusercontent.com/a/ACg8ocKOiK1fDw1AN5rBOWlKmzLOJuTDgo5amD67qnK38DE8NQKTiEwb=s200-c',
    },
    { name: 'Kyaw Saw Ye Yint(Sam)', role: 'Java Developer', img: 'https://i.pravatar.cc/150?u=2' },
    { name: 'Min Thet Cho(Min)', role: 'Java Developer', img: 'https://i.pravatar.cc/150?u=2' },
    {
        name: 'Sai Myat Phone Oo(Sai)',
        role: 'Java Developer',
        img: 'https://i.pravatar.cc/150?u=2',
    },
    {
        name: 'Myat Thura Saung(Saung)',
        role: 'Java Developer',
        img: '/images/saung.jpg',
        // img: 'https://i.pravatar.cc/150?u=5',
    },
    { name: 'Kyaw Zaw Win(Leo2)', role: 'Java Developer', img: 'https://i.pravatar.cc/150?u=2' },
    { name: 'Saw Yan Shein', role: 'Java Developer', img: 'https://i.pravatar.cc/150?u=2' },
];

export const PAGE_DATA: Record<BSTFunction, PageContent> = {
    [BSTFunction.TEAM]: {
        title: 'Meet the Team',
        description:
            'The developers and engineers behind the Binary Search Tree Masterclass project.',
        javaCode:
            '// Project Contributors\n// Managed by Min Htet Thar\n// Repository: bst-masterclass-java',
        complexity: { time: 'N/A', space: 'N/A' },
        terminalOutput: [
            'Fetching team members...',
            '7 contributors found.',
            'Loading profile images...',
        ],
    },
    [BSTFunction.OVERVIEW]: {
        title: 'Binary Search Tree (BST)',
        description:
            'A node-based binary tree data structure with the ordering property: for every node, left subtree values are smaller and right subtree values are larger. BSTs enable efficient searching, insertion, and deletion operations.',
        javaCode: `public class BSTree {
    private Node root;
    
    public BSTree() { 
        root = null; 
    }
    
    // BST Property: left < node < right
}`,
        complexity: { time: 'Operations: O(log n) avg', space: 'O(n)' },
        terminalOutput: ['BSTree initialized...', 'Root set to null.', 'Ready for operations.'],
    },
    [BSTFunction.INSERT]: {
        title: 'The Insert Operation',
        description:
            'Insertion always happens at a leaf position. The algorithm recursively compares the new data with current node values to find the correct empty slot.',
        scenario: 'Adding a New Student Record',
        scenarioDescription:
            'In a student database sorted by ID, when a new student joins, we insert them into the correct branch to maintain the sorted property.',
        javaCode: `public Node insertRecursive(Node current, int data) {
    if (current == null) {
        return new Node(data);
    }
    if (data < current.getData()) {
        current.setleft(insertRecursive(current.getleft(), data));
    } else if (data > current.getData()) {
        current.setright(insertRecursive(current.getright(), data));
    }
    return current;
}`,
        complexity: { time: 'O(h) where h is height', space: 'O(h) stack space' },
        terminalOutput: [
            'Inserting Node: 7',
            'Current Node: 5 => going to the right subtree',
            'Node 7 inserted successfully',
            'Finished',
        ],
    },
    [BSTFunction.SEARCHING]: {
        title: 'Searching for Data',
        description:
            'Search in a BST is efficient because at each step, we eliminate one branch of the tree by comparing values. In a balanced BST, this is similar to binary search in an array.',
        scenario: 'Finding a Product by Serial Number',
        scenarioDescription:
            "An inventory system searches for a specific serial number. If it's smaller than current, it only looks left; if larger, it only looks right.",
        javaCode: `public boolean searching(int data) {
    Node current = root;
    while(current != null) {
        if(data == current.getData()) return true;
        else if(data < current.getData()) current = current.getleft();
        else current = current.getright();
    }
    return false;
}`,
        complexity: { time: 'O(log n) Avg', space: 'O(1)' },
        terminalOutput: ['Searching for 7...', 'Found 7', 'Search successful.'],
    },
    [BSTFunction.INORDER]: {
        title: 'Inorder Traversal (L-Ro-R)',
        description:
            'Traverses the left subtree, then the root, then the right subtree. In a BST, this always results in data being processed in non-decreasing order.',
        scenario: 'Generating an Alphabetical List',
        scenarioDescription:
            'Best for extracting all items in a sorted sequence, such as printing a dictionary or a scoreboard.',
        javaCode: `private void inorderHelper(Node node) {
    if(node == null) return;
    inorderHelper(node.getleft());
    System.out.print(node.getData() + " ");
    inorderHelper(node.getright());
}`,
        complexity: { time: 'O(n)', space: 'O(h)' },
        terminalOutput: ['Executing Inorder...', '3 4 5 7 9', 'Traversal complete.'],
    },
    [BSTFunction.PREORDER]: {
        title: 'Preorder Traversal (Ro-L-R)',
        description:
            'Processes the root node first, then recursively traverses the left and right subtrees. Ideal for structural representation.',
        scenario: 'Cloning or Serializing a Tree',
        scenarioDescription:
            'Used when you need to create a copy of a tree or save it to a file in a way that preserves its parent-child structure for reconstruction.',
        javaCode: `private void preorderHelper(Node node) {
    if(node == null) return;
    System.out.print(node.getData() + " ");
    preorderHelper(node.getleft());
    preorderHelper(node.getright());
}`,
        complexity: { time: 'O(n)', space: 'O(h)' },
        terminalOutput: ['Executing Preorder...', '5 4 3 7 9', 'Traversal complete.'],
    },
    [BSTFunction.POSTORDER]: {
        title: 'Postorder Traversal (L-R-Ro)',
        description:
            'Traverses the subtrees first and the root last. This is necessary for operations that require children to be processed before parents.',
        scenario: 'Deleting a File Directory',
        scenarioDescription:
            'You must delete all files and subfolders inside a folder before you can safely delete the folder itself.',
        javaCode: `private void postorderHelper(Node node) {
    if(node == null) return;
    postorderHelper(node.getleft());
    postorderHelper(node.getright());
    System.out.print(node.getData() + " ");
}`,
        complexity: { time: 'O(n)', space: 'O(h)' },
        terminalOutput: ['Executing Postorder...', '3 4 9 7 5', 'Traversal complete.'],
    },
    [BSTFunction.DELETING]: {
        title: 'Deleting a Node',
        description:
            'Deletion handles three cases: leaf nodes (easy), nodes with one child (bypass), and nodes with two children (replace with inorder successor).',
        scenario: 'Removing a Task from a Priority Queue',
        scenarioDescription:
            'When a task is completed, it must be removed. If it has dependencies (children), the structure must be re-organized to maintain order.',
        javaCode: `if(node.getleft() == null) return node.getright();
else if(node.getright() == null) return node.getleft();

node.setData(minValue(node.getright()));
node.setright(deleteHelper(node.getright(), node.getData()));`,
        complexity: { time: 'O(h)', space: 'O(h)' },
        terminalOutput: [
            'Deleting 7...',
            'Successor found: 9',
            '7 deleted successfully',
            'New structure verified',
        ],
    },
    [BSTFunction.PERFORMANCE]: {
        title: 'Performance Analysis',
        description:
            'Comparative analysis of BST operations. Performance heavily depends on tree balance. Balanced trees (height ≈ log n) give O(log n) operations, while skewed trees (height = n) degrade to O(n).',
        javaCode: `// Benchmark Example
long start = System.nanoTime();
bst.search(target);
long end = System.nanoTime();

System.out.println("Time: " + (end-start) + "ns");

// Balanced vs Skewed comparison`,
        complexity: { time: 'Best: O(log n) | Worst: O(n)', space: 'O(n)' },
        terminalOutput: [
            'Search (Balanced): 45ns',
            'Search (Skewed): 890ns',
            'Inorder (n=1000): 12,400ns',
            'Deletion (n=1000): 150ns',
        ],
    },
};
