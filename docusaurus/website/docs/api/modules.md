---
id: "modules"
title: "card-window"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Type aliases

### CardComponent

Ƭ **CardComponent**<`T`\>: `React.ComponentType`<[`CardProps`](modules#cardprops)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown`[] |

#### Defined in

[CardWindow.tsx:4](https://github.com/michiharu/card-window/blob/ac3ccd7/packages/card-window/src/CardWindow.tsx#L4)

___

### CardProps

Ƭ **CardProps**<`T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown`[] |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `T` |
| `index` | `number` |
| `style` | `React.CSSProperties` |

#### Defined in

[CardWindow.tsx:3](https://github.com/michiharu/card-window/blob/ac3ccd7/packages/card-window/src/CardWindow.tsx#L3)

___

### CardWindowProps

Ƭ **CardWindowProps**<`T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown`[] = `unknown`[] |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cardRect` | [`Rect`](modules#rect) |
| `children` | [`CardComponent`](modules#cardcomponent)<`T`\> |
| `data` | `T` |
| `innerStyle?` | `Omit`<`React.CSSProperties`, ``"position"`` \| ``"width"`` \| ``"height"``\> |
| `justifyContent?` | [`JustifyContent`](modules#justifycontent) |
| `loading?` | [`Loading`](modules#loading) |
| `overScanPx?` | `number` |
| `style?` | `Omit`<`React.CSSProperties`, ``"overflow"``\> |
| `getKey?` | (`index`: `number`, `data`: `T`) => `string` |

#### Defined in

[CardWindow.tsx:105](https://github.com/michiharu/card-window/blob/ac3ccd7/packages/card-window/src/CardWindow.tsx#L105)

___

### JustifyContent

Ƭ **JustifyContent**: ``"start"`` \| ``"center"`` \| ``"space-evenly"`` \| ``"space-around"``

#### Defined in

[CardWindow.tsx:6](https://github.com/michiharu/card-window/blob/ac3ccd7/packages/card-window/src/CardWindow.tsx#L6)

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

[CardWindow.tsx:7](https://github.com/michiharu/card-window/blob/ac3ccd7/packages/card-window/src/CardWindow.tsx#L7)

___

### Rect

Ƭ **Rect**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `height` | `number` |
| `width` | `number` |

#### Defined in

[CardWindow.tsx:5](https://github.com/michiharu/card-window/blob/ac3ccd7/packages/card-window/src/CardWindow.tsx#L5)

## Variables

### CardWindow

• **CardWindow**: `React.FC`<[`CardWindowProps`](modules#cardwindowprops)\>

#### Defined in

[CardWindow.tsx:117](https://github.com/michiharu/card-window/blob/ac3ccd7/packages/card-window/src/CardWindow.tsx#L117)

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

[CardWindow.tsx:14](https://github.com/michiharu/card-window/blob/ac3ccd7/packages/card-window/src/CardWindow.tsx#L14)
