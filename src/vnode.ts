const VNODE_TYPE = Symbol('virtual-dom')

export type Key = string | number

export interface VNodeData {
  key?: Key
}

export interface VNode {
  __type?: symbol
  type?: string
  text?: string
  data?: VNodeData
  children?: Array<VNode | string> | null
  key?: Key
}

export function vnode(
  type: string,
  text: string,
  data: VNodeData,
  children: Array<VNode | string>
): VNode {
  const element = {
    __type: VNODE_TYPE,
    key: data && data.key,
    type,
    text,
    children
  }
  return element
}

export function isVnode(vnode: any): vnode is VNode {
  return vnode && vnode.__type === VNODE_TYPE
}

export function isSameVnode(vnode1: VNode, vnode2: VNode): boolean {
  return vnode1.type === vnode2.type && vnode1.key === vnode2.key
}
