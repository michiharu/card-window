---
sidebar_position: 3
---

# API

## Type aliases

### CardComponent

**CardComponent**<`T`\>: `React.ComponentType`<[`CardProps`](API#cardprops)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown`[] |

#### Defined in

[CardWindow.tsx:4](https://github.com/michiharu/card-window/blob/ac3ccd7/packages/card-window/src/CardWindow.tsx#L4)

___

### CardProps

**CardProps**<`T`\>: `Object`

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

**CardWindowProps**<`T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown`[] = `unknown`[] |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cardRect` | [`Rect`](api#rect) |
| `children` | [`CardComponent`](api#cardcomponent)<`T`\> |
| `data` | `T` |
| `innerStyle?` | `Omit`<`React.CSSProperties`, ``"position"`` \| ``"width"`` \| ``"height"``\> |
| `justifyContent?` | [`JustifyContent`](api#justifycontent) |
| `loading?` | [`Loading`](api#loading) |
| `overScanPx?` | `number` |
| `style?` | `Omit`<`React.CSSProperties`, ``"overflow"``\> |
| `getKey?` | (`index`: `number`, `data`: `T`) => `string` |

#### Defined in

[CardWindow.tsx:105](https://github.com/michiharu/card-window/blob/ac3ccd7/packages/card-window/src/CardWindow.tsx#L105)

___

### JustifyContent

**JustifyContent**: ``"start"`` \| ``"center"`` \| ``"space-evenly"`` \| ``"space-around"``

#### Defined in

[CardWindow.tsx:6](https://github.com/michiharu/card-window/blob/ac3ccd7/packages/card-window/src/CardWindow.tsx#L6)

___

### Loading

**Loading**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `LoadingComponent` | `React.ReactNode` |
| `loadingRect` | [`Rect`](api#rect) |
| `type` | ``"card"`` \| ``"row"`` |
| `loadMoreItems` | () => `void` |

#### Defined in

[CardWindow.tsx:7](https://github.com/michiharu/card-window/blob/ac3ccd7/packages/card-window/src/CardWindow.tsx#L7)

___

### Rect

**Rect**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `height` | `number` |
| `width` | `number` |

#### Defined in

[CardWindow.tsx:5](https://github.com/michiharu/card-window/blob/ac3ccd7/packages/card-window/src/CardWindow.tsx#L5)

## Variables

### CardWindow

• **CardWindow**: `React.FC`<[`CardWindowProps`](api#cardwindowprops)\>

#### Defined in

[CardWindow.tsx:117](https://github.com/michiharu/card-window/blob/ac3ccd7/packages/card-window/src/CardWindow.tsx#L117)

## Functions

### useResizeObserver

▸ `Const` **useResizeObserver**(`initial?`): [[`Rect`](api#rect), `MutableRefObject`<`HTMLDivElement`\>]

#### Parameters

| Name | Type |
| :------ | :------ |
| `initial` | [`Rect`](api#rect) |

#### Returns

[[`Rect`](api#rect), `MutableRefObject`<`HTMLDivElement`\>]

#### Defined in

[CardWindow.tsx:14](https://github.com/michiharu/card-window/blob/ac3ccd7/packages/card-window/src/CardWindow.tsx#L14)
