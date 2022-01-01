---
id: "modules"
title: "card-window"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Type aliases

### CardProps

Ƭ **CardProps**<`T`\>: `Object`

CardWindow provides `children` component with this props.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any`[] |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `T` |
| `index` | `number` |
| `style` | `React.CSSProperties` |

#### Defined in

[CardWindow.tsx:4](https://github.com/michiharu/card-window/blob/6a91409/packages/card-window/src/CardWindow.tsx#L4)

___

### CardWindowProps

Ƭ **CardWindowProps**<`T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any`[] = `any`[] |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `cardRect` | [`Rect`](modules#rect) | - |
| `children` | `React.ComponentType`<[`CardProps`](modules#cardprops)<`T`\>\> | - |
| `className?` | `string` | - |
| `data` | `T` | `data` is an array. CardWindow passes data to `children` component. |
| `innerStyle?` | `Omit`<`React.CSSProperties`, ``"position"`` \| ``"width"`` \| ``"height"``\> | - |
| `justifyContent?` | [`JustifyContent`](modules#justifycontent) | - |
| `lastRowAlign?` | `LastRowAlign` | - |
| `loading?` | [`Loading`](modules#loading) | - |
| `overScanPx?` | `number` | - |
| `spacing?` | `Partial`<[`Spacing`](modules#spacing)\> | - |
| `style?` | `Omit`<`React.CSSProperties`, ``"overflow"``\> | - |
| `getKey?` | (`index`: `number`, `data`: `T`) => `string` | - |

#### Defined in

[CardWindow.tsx:19](https://github.com/michiharu/card-window/blob/6a91409/packages/card-window/src/CardWindow.tsx#L19)

___

### JustifyContent

Ƭ **JustifyContent**: ``"left"`` \| ``"right"`` \| ``"center"`` \| ``"space-around"`` \| ``"space-between"`` \| ``"space-evenly"``

JustifyContent only supports 6 values.

#### Defined in

[CardWindow.tsx:10](https://github.com/michiharu/card-window/blob/6a91409/packages/card-window/src/CardWindow.tsx#L10)

___

### Loading

Ƭ **Loading**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `LoadingComponent` | `React.ReactNode` |
| `loadingRect` | [`Rect`](modules#rect) |
| `type` | ``"card"`` \| ``"row"`` |
| `loadMoreItems` | () => `void` |

#### Defined in

[CardWindow.tsx:12](https://github.com/michiharu/card-window/blob/6a91409/packages/card-window/src/CardWindow.tsx#L12)

___

### Rect

Ƭ **Rect**: `Object`

These values ​​are `px`.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `height` | `number` |
| `width` | `number` |

#### Defined in

[CardWindow.tsx:6](https://github.com/michiharu/card-window/blob/6a91409/packages/card-window/src/CardWindow.tsx#L6)

___

### Spacing

Ƭ **Spacing**: `Object`

These values ​​are `px`.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Defined in

[CardWindow.tsx:8](https://github.com/michiharu/card-window/blob/6a91409/packages/card-window/src/CardWindow.tsx#L8)

## Variables

### CardWindow

• **CardWindow**: `React.FC`<[`CardWindowProps`](modules#cardwindowprops)\>

#### Defined in

[CardWindow.tsx:168](https://github.com/michiharu/card-window/blob/6a91409/packages/card-window/src/CardWindow.tsx#L168)

## Functions

### useResizeObserver

▸ `Const` **useResizeObserver**(`initial?`): [[`Rect`](modules#rect), `MutableRefObject`<`HTMLDivElement`\>]

#### Parameters

| Name | Type |
| :------ | :------ |
| `initial` | [`Rect`](modules#rect) |

#### Returns

[[`Rect`](modules#rect), `MutableRefObject`<`HTMLDivElement`\>]

#### Defined in

[CardWindow.tsx:35](https://github.com/michiharu/card-window/blob/6a91409/packages/card-window/src/CardWindow.tsx#L35)
