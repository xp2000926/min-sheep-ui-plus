import { ExtractPropTypes } from 'vue';

export interface ITreeNode {
  label: string;
  id?: string;
  children?: ITreeNode[];

  selected?: boolean; // 点击选中
  checked?: boolean; // 勾选
  expanded?: boolean; // 展开
  inChecked?: boolean; // 待选中

  disableSelect?: boolean;
  disableCheck?: boolean;
  disableToggle?: boolean;
  disabled?: boolean;
}

export const treeProps = {
  // 默认勾选的节点的 key 的数组
  defaultCheckedKeys: {
    type: Array<number | string>,
    default: () => []
  },
  // 默认展开的节点的 key 的数组
  defaultExpandedKeys: {
    type: Array<number | string>,
    default: () => []
  },
  // 默认禁用的节点的 key 的数组
  defaultDisabledKeys: {
    type: Array<number | string>,
    default: () => []
  }
} as const;
export type TreeProps = ExtractPropTypes<typeof treeProps>;
