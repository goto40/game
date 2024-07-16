import * as z from "zod";


export const ForcedRefsTypeSchema = z.enum([
    "boolean",
    "integer",
    "null",
    "number",
    "object",
    "string",
]);
export type ForcedRefsType = z.infer<typeof ForcedRefsTypeSchema>;


export const CustomCommandsTypeSchema = z.enum([
    "array",
    "null",
]);
export type CustomCommandsType = z.infer<typeof CustomCommandsTypeSchema>;

export const AppBuildIdSchema = z.object({
    "description": z.string(),
    "type": z.array(ForcedRefsTypeSchema),
});
export type AppBuildId = z.infer<typeof AppBuildIdSchema>;

export const ItemsValueSchema = z.object({
    "$ref": z.string(),
});
export type ItemsValue = z.infer<typeof ItemsValueSchema>;

export const DefsSchema = z.object({
    "description": z.string(),
    "$ref": z.string(),
});
export type Defs = z.infer<typeof DefsSchema>;

export const FlagsItemsSchema = z.object({
    "enum": z.array(z.string()),
});
export type FlagsItems = z.infer<typeof FlagsItemsSchema>;

export const ForcedRefsSchema = z.object({
    "description": z.string(),
    "properties": z.record(z.string(), ItemsValueSchema),
    "type": z.array(ForcedRefsTypeSchema),
});
export type ForcedRefs = z.infer<typeof ForcedRefsSchema>;

export const IdentifierStyleSchema = z.object({
    "description": z.string(),
    "enum": z.array(z.string()),
});
export type IdentifierStyle = z.infer<typeof IdentifierStyleSchema>;

export const WorldLayoutSchema = z.object({
    "description": z.string(),
    "enum": z.array(z.union([z.null(), z.string()])),
});
export type WorldLayout = z.infer<typeof WorldLayoutSchema>;

export const OneOfSchema = z.object({
    "type": z.array(ForcedRefsTypeSchema).optional(),
    "$ref": z.string().optional(),
});
export type OneOf = z.infer<typeof OneOfSchema>;

export const RequiredBiomeValuesItemsSchema = z.object({
    "type": z.array(ForcedRefsTypeSchema),
});
export type RequiredBiomeValuesItems = z.infer<typeof RequiredBiomeValuesItemsSchema>;

export const TileRectsIdsItemsSchema = z.object({
    "items": RequiredBiomeValuesItemsSchema,
    "type": z.array(CustomCommandsTypeSchema),
});
export type TileRectsIdsItems = z.infer<typeof TileRectsIdsItemsSchema>;

export const CustomCommandPropertiesSchema = z.object({
    "when": IdentifierStyleSchema,
    "command": AppBuildIdSchema,
});
export type CustomCommandProperties = z.infer<typeof CustomCommandPropertiesSchema>;

export const EntityReferenceInfosPropertiesSchema = z.object({
    "worldIid": AppBuildIdSchema,
    "entityIid": AppBuildIdSchema,
    "layerIid": AppBuildIdSchema,
    "levelIid": AppBuildIdSchema,
});
export type EntityReferenceInfosProperties = z.infer<typeof EntityReferenceInfosPropertiesSchema>;

export const DefaultOverrideSchema = z.object({
    "description": z.string(),
});
export type DefaultOverride = z.infer<typeof DefaultOverrideSchema>;

export const RealEditorValuesItemsSchema = z.object({
});
export type RealEditorValuesItems = z.infer<typeof RealEditorValuesItemsSchema>;

export const GridPointPropertiesSchema = z.object({
    "cy": AppBuildIdSchema,
    "cx": AppBuildIdSchema,
});
export type GridPointProperties = z.infer<typeof GridPointPropertiesSchema>;

export const IntGridValueGroupDefPropertiesSchema = z.object({
    "color": AppBuildIdSchema,
    "uid": AppBuildIdSchema,
    "identifier": AppBuildIdSchema,
});
export type IntGridValueGroupDefProperties = z.infer<typeof IntGridValueGroupDefPropertiesSchema>;

export const IntGridValueInstancePropertiesSchema = z.object({
    "v": AppBuildIdSchema,
    "coordId": AppBuildIdSchema,
});
export type IntGridValueInstanceProperties = z.infer<typeof IntGridValueInstancePropertiesSchema>;

export const NeighbourLevelPropertiesSchema = z.object({
    "levelIid": AppBuildIdSchema,
    "levelUid": AppBuildIdSchema,
    "dir": AppBuildIdSchema,
});
export type NeighbourLevelProperties = z.infer<typeof NeighbourLevelPropertiesSchema>;

export const TileCustomMetadataPropertiesSchema = z.object({
    "tileId": AppBuildIdSchema,
    "data": AppBuildIdSchema,
});
export type TileCustomMetadataProperties = z.infer<typeof TileCustomMetadataPropertiesSchema>;

export const TilesetRectPropertiesSchema = z.object({
    "tilesetUid": AppBuildIdSchema,
    "h": AppBuildIdSchema,
    "x": AppBuildIdSchema,
    "y": AppBuildIdSchema,
    "w": AppBuildIdSchema,
});
export type TilesetRectProperties = z.infer<typeof TilesetRectPropertiesSchema>;

export const TocInstanceDataPropertiesSchema = z.object({
    "worldX": AppBuildIdSchema,
    "widPx": AppBuildIdSchema,
    "worldY": AppBuildIdSchema,
    "heiPx": AppBuildIdSchema,
    "fields": DefaultOverrideSchema,
    "iids": DefsSchema,
});
export type TocInstanceDataProperties = z.infer<typeof TocInstanceDataPropertiesSchema>;

export const CustomCommandsSchema = z.object({
    "description": z.string(),
    "items": ItemsValueSchema,
    "type": z.array(CustomCommandsTypeSchema),
});
export type CustomCommands = z.infer<typeof CustomCommandsSchema>;

export const FlagsSchema = z.object({
    "description": z.string(),
    "items": FlagsItemsSchema,
    "type": z.array(CustomCommandsTypeSchema),
});
export type Flags = z.infer<typeof FlagsSchema>;

export const IconSchema = z.object({
    "description": z.string(),
    "oneOf": z.array(OneOfSchema),
});
export type Icon = z.infer<typeof IconSchema>;

export const RequiredBiomeValuesSchema = z.object({
    "description": z.string(),
    "items": RequiredBiomeValuesItemsSchema,
    "type": z.array(CustomCommandsTypeSchema),
});
export type RequiredBiomeValues = z.infer<typeof RequiredBiomeValuesSchema>;

export const TileRectsIdsSchema = z.object({
    "description": z.string(),
    "items": TileRectsIdsItemsSchema,
    "type": z.array(CustomCommandsTypeSchema),
});
export type TileRectsIds = z.infer<typeof TileRectsIdsSchema>;

export const CustomCommandSchema = z.object({
    "title": z.string(),
    "required": z.array(z.string()),
    "additionalProperties": z.boolean(),
    "properties": CustomCommandPropertiesSchema,
    "type": z.array(ForcedRefsTypeSchema),
});
export type CustomCommand = z.infer<typeof CustomCommandSchema>;

export const DefinitionsPropertiesSchema = z.object({
    "tilesets": CustomCommandsSchema,
    "layers": CustomCommandsSchema,
    "levelFields": CustomCommandsSchema,
    "enums": CustomCommandsSchema,
    "entities": CustomCommandsSchema,
    "externalEnums": CustomCommandsSchema,
});
export type DefinitionsProperties = z.infer<typeof DefinitionsPropertiesSchema>;

export const EntityDefPropertiesSchema = z.object({
    "tileId": AppBuildIdSchema,
    "showName": AppBuildIdSchema,
    "tilesetId": AppBuildIdSchema,
    "maxHeight": AppBuildIdSchema,
    "limitScope": IdentifierStyleSchema,
    "pivotX": AppBuildIdSchema,
    "maxCount": AppBuildIdSchema,
    "allowOutOfBounds": AppBuildIdSchema,
    "hollow": AppBuildIdSchema,
    "minHeight": AppBuildIdSchema,
    "keepAspectRatio": AppBuildIdSchema,
    "color": AppBuildIdSchema,
    "minWidth": AppBuildIdSchema,
    "tileRect": IconSchema,
    "doc": AppBuildIdSchema,
    "fieldDefs": CustomCommandsSchema,
    "tileRenderMode": IdentifierStyleSchema,
    "limitBehavior": IdentifierStyleSchema,
    "tileOpacity": AppBuildIdSchema,
    "nineSliceBorders": RequiredBiomeValuesSchema,
    "resizableX": AppBuildIdSchema,
    "uiTileRect": IconSchema,
    "uid": AppBuildIdSchema,
    "lineOpacity": AppBuildIdSchema,
    "maxWidth": AppBuildIdSchema,
    "resizableY": AppBuildIdSchema,
    "exportToToc": AppBuildIdSchema,
    "fillOpacity": AppBuildIdSchema,
    "height": AppBuildIdSchema,
    "identifier": AppBuildIdSchema,
    "pivotY": AppBuildIdSchema,
    "renderMode": IdentifierStyleSchema,
    "tags": RequiredBiomeValuesSchema,
    "width": AppBuildIdSchema,
});
export type EntityDefProperties = z.infer<typeof EntityDefPropertiesSchema>;

export const EntityInstancePropertiesSchema = z.object({
    "iid": AppBuildIdSchema,
    "defUid": AppBuildIdSchema,
    "__identifier": AppBuildIdSchema,
    "__tile": IconSchema,
    "px": RequiredBiomeValuesSchema,
    "__worldX": AppBuildIdSchema,
    "__worldY": AppBuildIdSchema,
    "__smartColor": AppBuildIdSchema,
    "__grid": RequiredBiomeValuesSchema,
    "__pivot": RequiredBiomeValuesSchema,
    "fieldInstances": CustomCommandsSchema,
    "height": AppBuildIdSchema,
    "__tags": RequiredBiomeValuesSchema,
    "width": AppBuildIdSchema,
});
export type EntityInstanceProperties = z.infer<typeof EntityInstancePropertiesSchema>;

export const EntityReferenceInfosSchema = z.object({
    "description": z.string(),
    "title": z.string(),
    "required": z.array(z.string()),
    "additionalProperties": z.boolean(),
    "properties": EntityReferenceInfosPropertiesSchema,
    "type": z.array(ForcedRefsTypeSchema),
});
export type EntityReferenceInfos = z.infer<typeof EntityReferenceInfosSchema>;

export const EnumDefPropertiesSchema = z.object({
    "externalFileChecksum": AppBuildIdSchema,
    "externalRelPath": AppBuildIdSchema,
    "uid": AppBuildIdSchema,
    "values": CustomCommandsSchema,
    "iconTilesetUid": AppBuildIdSchema,
    "identifier": AppBuildIdSchema,
    "tags": RequiredBiomeValuesSchema,
});
export type EnumDefProperties = z.infer<typeof EnumDefPropertiesSchema>;

export const EnumDefValuesPropertiesSchema = z.object({
    "tileId": AppBuildIdSchema,
    "color": AppBuildIdSchema,
    "tileRect": IconSchema,
    "id": AppBuildIdSchema,
    "__tileSrcRect": RequiredBiomeValuesSchema,
});
export type EnumDefValuesProperties = z.infer<typeof EnumDefValuesPropertiesSchema>;

export const EnumTagValuePropertiesSchema = z.object({
    "tileIds": RequiredBiomeValuesSchema,
    "enumValueId": AppBuildIdSchema,
});
export type EnumTagValueProperties = z.infer<typeof EnumTagValuePropertiesSchema>;

export const FieldDefPropertiesSchema = z.object({
    "acceptFileTypes": RequiredBiomeValuesSchema,
    "editorDisplayScale": AppBuildIdSchema,
    "searchable": AppBuildIdSchema,
    "useForSmartColor": AppBuildIdSchema,
    "editorShowInWorld": AppBuildIdSchema,
    "allowedRefs": IdentifierStyleSchema,
    "editorAlwaysShow": AppBuildIdSchema,
    "arrayMinLength": AppBuildIdSchema,
    "editorTextSuffix": AppBuildIdSchema,
    "min": AppBuildIdSchema,
    "__type": AppBuildIdSchema,
    "editorDisplayMode": IdentifierStyleSchema,
    "editorDisplayColor": AppBuildIdSchema,
    "canBeNull": AppBuildIdSchema,
    "autoChainRef": AppBuildIdSchema,
    "doc": AppBuildIdSchema,
    "allowedRefsEntityUid": AppBuildIdSchema,
    "tilesetUid": AppBuildIdSchema,
    "allowedRefTags": RequiredBiomeValuesSchema,
    "symmetricalRef": AppBuildIdSchema,
    "uid": AppBuildIdSchema,
    "editorTextPrefix": AppBuildIdSchema,
    "isArray": AppBuildIdSchema,
    "exportToToc": AppBuildIdSchema,
    "editorDisplayPos": IdentifierStyleSchema,
    "textLanguageMode": WorldLayoutSchema,
    "max": AppBuildIdSchema,
    "allowOutOfLevelRef": AppBuildIdSchema,
    "editorCutLongValues": AppBuildIdSchema,
    "defaultOverride": DefaultOverrideSchema,
    "editorLinkStyle": IdentifierStyleSchema,
    "regex": AppBuildIdSchema,
    "type": AppBuildIdSchema,
    "identifier": AppBuildIdSchema,
    "arrayMaxLength": AppBuildIdSchema,
});
export type FieldDefProperties = z.infer<typeof FieldDefPropertiesSchema>;

export const RealEditorValuesSchema = z.object({
    "description": z.string(),
    "items": RealEditorValuesItemsSchema,
    "type": z.array(CustomCommandsTypeSchema),
});
export type RealEditorValues = z.infer<typeof RealEditorValuesSchema>;

export const GridPointSchema = z.object({
    "description": z.string(),
    "title": z.string(),
    "required": z.array(z.string()),
    "additionalProperties": z.boolean(),
    "properties": GridPointPropertiesSchema,
    "type": z.array(ForcedRefsTypeSchema),
});
export type GridPoint = z.infer<typeof GridPointSchema>;

export const IntGridValueDefPropertiesSchema = z.object({
    "tile": IconSchema,
    "color": AppBuildIdSchema,
    "identifier": AppBuildIdSchema,
    "value": AppBuildIdSchema,
    "groupUid": AppBuildIdSchema,
});
export type IntGridValueDefProperties = z.infer<typeof IntGridValueDefPropertiesSchema>;

export const IntGridValueGroupDefSchema = z.object({
    "description": z.string(),
    "title": z.string(),
    "required": z.array(z.string()),
    "additionalProperties": z.boolean(),
    "properties": IntGridValueGroupDefPropertiesSchema,
    "type": z.array(ForcedRefsTypeSchema),
});
export type IntGridValueGroupDef = z.infer<typeof IntGridValueGroupDefSchema>;

export const IntGridValueInstanceSchema = z.object({
    "description": z.string(),
    "title": z.string(),
    "required": z.array(z.string()),
    "additionalProperties": z.boolean(),
    "properties": IntGridValueInstancePropertiesSchema,
    "type": z.array(ForcedRefsTypeSchema),
});
export type IntGridValueInstance = z.infer<typeof IntGridValueInstanceSchema>;

export const LayerDefPropertiesSchema = z.object({
    "pxOffsetX": AppBuildIdSchema,
    "tilePivotX": AppBuildIdSchema,
    "uiFilterTags": RequiredBiomeValuesSchema,
    "displayOpacity": AppBuildIdSchema,
    "parallaxFactorY": AppBuildIdSchema,
    "hideInList": AppBuildIdSchema,
    "__type": AppBuildIdSchema,
    "guideGridHei": AppBuildIdSchema,
    "uiColor": AppBuildIdSchema,
    "doc": AppBuildIdSchema,
    "tilesetDefUid": AppBuildIdSchema,
    "canSelectWhenInactive": AppBuildIdSchema,
    "useAsyncRender": AppBuildIdSchema,
    "autoSourceLayerDefUid": AppBuildIdSchema,
    "autoTilesetDefUid": AppBuildIdSchema,
    "parallaxScaling": AppBuildIdSchema,
    "renderInWorldView": AppBuildIdSchema,
    "intGridValuesGroups": CustomCommandsSchema,
    "inactiveOpacity": AppBuildIdSchema,
    "uid": AppBuildIdSchema,
    "excludedTags": RequiredBiomeValuesSchema,
    "hideFieldsWhenInactive": AppBuildIdSchema,
    "intGridValues": CustomCommandsSchema,
    "autoRuleGroups": CustomCommandsSchema,
    "type": IdentifierStyleSchema,
    "identifier": AppBuildIdSchema,
    "guideGridWid": AppBuildIdSchema,
    "requiredTags": RequiredBiomeValuesSchema,
    "pxOffsetY": AppBuildIdSchema,
    "tilePivotY": AppBuildIdSchema,
    "biomeFieldUid": AppBuildIdSchema,
    "gridSize": AppBuildIdSchema,
    "parallaxFactorX": AppBuildIdSchema,
    "autoTilesKilledByOtherLayerUid": AppBuildIdSchema,
});
export type LayerDefProperties = z.infer<typeof LayerDefPropertiesSchema>;

export const LayerInstancePropertiesSchema = z.object({
    "__cHei": AppBuildIdSchema,
    "pxOffsetX": AppBuildIdSchema,
    "__tilesetRelPath": AppBuildIdSchema,
    "iid": AppBuildIdSchema,
    "levelId": AppBuildIdSchema,
    "__type": AppBuildIdSchema,
    "autoLayerTiles": CustomCommandsSchema,
    "optionalRules": RequiredBiomeValuesSchema,
    "__identifier": AppBuildIdSchema,
    "__gridSize": AppBuildIdSchema,
    "__pxTotalOffsetY": AppBuildIdSchema,
    "intGridCsv": RequiredBiomeValuesSchema,
    "overrideTilesetUid": AppBuildIdSchema,
    "visible": AppBuildIdSchema,
    "entityInstances": CustomCommandsSchema,
    "__opacity": AppBuildIdSchema,
    "seed": AppBuildIdSchema,
    "layerDefUid": AppBuildIdSchema,
    "__pxTotalOffsetX": AppBuildIdSchema,
    "__cWid": AppBuildIdSchema,
    "pxOffsetY": AppBuildIdSchema,
    "__tilesetDefUid": AppBuildIdSchema,
    "gridTiles": CustomCommandsSchema,
    "intGrid": CustomCommandsSchema,
});
export type LayerInstanceProperties = z.infer<typeof LayerInstancePropertiesSchema>;

export const LevelPropertiesSchema = z.object({
    "__neighbours": CustomCommandsSchema,
    "__bgColor": AppBuildIdSchema,
    "worldX": AppBuildIdSchema,
    "externalRelPath": AppBuildIdSchema,
    "useAutoIdentifier": AppBuildIdSchema,
    "iid": AppBuildIdSchema,
    "bgColor": AppBuildIdSchema,
    "bgPos": WorldLayoutSchema,
    "pxHei": AppBuildIdSchema,
    "worldY": AppBuildIdSchema,
    "__bgPos": IconSchema,
    "uid": AppBuildIdSchema,
    "__smartColor": AppBuildIdSchema,
    "fieldInstances": CustomCommandsSchema,
    "pxWid": AppBuildIdSchema,
    "identifier": AppBuildIdSchema,
    "bgPivotY": AppBuildIdSchema,
    "bgPivotX": AppBuildIdSchema,
    "layerInstances": CustomCommandsSchema,
    "bgRelPath": AppBuildIdSchema,
    "worldDepth": AppBuildIdSchema,
});
export type LevelProperties = z.infer<typeof LevelPropertiesSchema>;

export const LevelBgPosInfosPropertiesSchema = z.object({
    "cropRect": RequiredBiomeValuesSchema,
    "scale": RequiredBiomeValuesSchema,
    "topLeftPx": RequiredBiomeValuesSchema,
});
export type LevelBgPosInfosProperties = z.infer<typeof LevelBgPosInfosPropertiesSchema>;

export const NeighbourLevelSchema = z.object({
    "description": z.string(),
    "title": z.string(),
    "required": z.array(z.string()),
    "additionalProperties": z.boolean(),
    "properties": NeighbourLevelPropertiesSchema,
    "type": z.array(ForcedRefsTypeSchema),
});
export type NeighbourLevel = z.infer<typeof NeighbourLevelSchema>;

export const TableOfContentEntryPropertiesSchema = z.object({
    "identifier": AppBuildIdSchema,
    "instancesData": CustomCommandsSchema,
    "instances": CustomCommandsSchema,
});
export type TableOfContentEntryProperties = z.infer<typeof TableOfContentEntryPropertiesSchema>;

export const TilePropertiesSchema = z.object({
    "t": AppBuildIdSchema,
    "d": RequiredBiomeValuesSchema,
    "px": RequiredBiomeValuesSchema,
    "a": AppBuildIdSchema,
    "f": AppBuildIdSchema,
    "src": RequiredBiomeValuesSchema,
});
export type TileProperties = z.infer<typeof TilePropertiesSchema>;

export const TileCustomMetadataSchema = z.object({
    "description": z.string(),
    "title": z.string(),
    "required": z.array(z.string()),
    "additionalProperties": z.boolean(),
    "properties": TileCustomMetadataPropertiesSchema,
    "type": z.array(ForcedRefsTypeSchema),
});
export type TileCustomMetadata = z.infer<typeof TileCustomMetadataSchema>;

export const TilesetDefPropertiesSchema = z.object({
    "cachedPixelData": AppBuildIdSchema,
    "__cHei": AppBuildIdSchema,
    "pxHei": AppBuildIdSchema,
    "customData": CustomCommandsSchema,
    "tagsSourceEnumUid": AppBuildIdSchema,
    "uid": AppBuildIdSchema,
    "padding": AppBuildIdSchema,
    "enumTags": CustomCommandsSchema,
    "pxWid": AppBuildIdSchema,
    "__cWid": AppBuildIdSchema,
    "spacing": AppBuildIdSchema,
    "identifier": AppBuildIdSchema,
    "savedSelections": RequiredBiomeValuesSchema,
    "tags": RequiredBiomeValuesSchema,
    "embedAtlas": WorldLayoutSchema,
    "relPath": AppBuildIdSchema,
    "tileGridSize": AppBuildIdSchema,
});
export type TilesetDefProperties = z.infer<typeof TilesetDefPropertiesSchema>;

export const TilesetRectSchema = z.object({
    "description": z.string(),
    "title": z.string(),
    "required": z.array(z.string()),
    "additionalProperties": z.boolean(),
    "properties": TilesetRectPropertiesSchema,
    "type": z.array(ForcedRefsTypeSchema),
});
export type TilesetRect = z.infer<typeof TilesetRectSchema>;

export const TocInstanceDataSchema = z.object({
    "title": z.string(),
    "required": z.array(z.string()),
    "additionalProperties": z.boolean(),
    "properties": TocInstanceDataPropertiesSchema,
    "type": z.array(ForcedRefsTypeSchema),
});
export type TocInstanceData = z.infer<typeof TocInstanceDataSchema>;

export const WorldPropertiesSchema = z.object({
    "worldGridWidth": AppBuildIdSchema,
    "iid": AppBuildIdSchema,
    "worldGridHeight": AppBuildIdSchema,
    "worldLayout": WorldLayoutSchema,
    "defaultLevelWidth": AppBuildIdSchema,
    "levels": CustomCommandsSchema,
    "defaultLevelHeight": AppBuildIdSchema,
    "identifier": AppBuildIdSchema,
});
export type WorldProperties = z.infer<typeof WorldPropertiesSchema>;

export const LdtkJsonRootPropertiesSchema = z.object({
    "backupLimit": AppBuildIdSchema,
    "defaultEntityWidth": AppBuildIdSchema,
    "backupOnSave": AppBuildIdSchema,
    "worldGridWidth": AppBuildIdSchema,
    "iid": AppBuildIdSchema,
    "defaultLevelBgColor": AppBuildIdSchema,
    "bgColor": AppBuildIdSchema,
    "worlds": CustomCommandsSchema,
    "toc": CustomCommandsSchema,
    "nextUid": AppBuildIdSchema,
    "imageExportMode": IdentifierStyleSchema,
    "identifierStyle": IdentifierStyleSchema,
    "defaultPivotY": AppBuildIdSchema,
    "dummyWorldIid": AppBuildIdSchema,
    "customCommands": CustomCommandsSchema,
    "worldGridHeight": AppBuildIdSchema,
    "appBuildId": AppBuildIdSchema,
    "defaultGridSize": AppBuildIdSchema,
    "worldLayout": WorldLayoutSchema,
    "flags": FlagsSchema,
    "levelNamePattern": AppBuildIdSchema,
    "exportPng": AppBuildIdSchema,
    "defaultLevelWidth": AppBuildIdSchema,
    "pngFilePattern": AppBuildIdSchema,
    "__FORCED_REFS": ForcedRefsSchema,
    "exportTiled": AppBuildIdSchema,
    "defs": DefsSchema,
    "levels": CustomCommandsSchema,
    "jsonVersion": AppBuildIdSchema,
    "defaultEntityHeight": AppBuildIdSchema,
    "defaultPivotX": AppBuildIdSchema,
    "defaultLevelHeight": AppBuildIdSchema,
    "simplifiedExport": AppBuildIdSchema,
    "externalLevels": AppBuildIdSchema,
    "tutorialDesc": AppBuildIdSchema,
    "minifyJson": AppBuildIdSchema,
    "exportLevelBg": AppBuildIdSchema,
    "backupRelPath": AppBuildIdSchema,
});
export type LdtkJsonRootProperties = z.infer<typeof LdtkJsonRootPropertiesSchema>;

export const AutoLayerRuleGroupPropertiesSchema = z.object({
    "name": AppBuildIdSchema,
    "collapsed": AppBuildIdSchema,
    "biomeRequirementMode": AppBuildIdSchema,
    "color": AppBuildIdSchema,
    "isOptional": AppBuildIdSchema,
    "icon": IconSchema,
    "usesWizard": AppBuildIdSchema,
    "uid": AppBuildIdSchema,
    "requiredBiomeValues": RequiredBiomeValuesSchema,
    "active": AppBuildIdSchema,
    "rules": CustomCommandsSchema,
});
export type AutoLayerRuleGroupProperties = z.infer<typeof AutoLayerRuleGroupPropertiesSchema>;

export const AutoRuleDefPropertiesSchema = z.object({
    "flipX": AppBuildIdSchema,
    "pivotX": AppBuildIdSchema,
    "perlinActive": AppBuildIdSchema,
    "tileRectsIds": TileRectsIdsSchema,
    "perlinScale": AppBuildIdSchema,
    "outOfBoundsValue": AppBuildIdSchema,
    "pattern": RequiredBiomeValuesSchema,
    "tileRandomXMin": AppBuildIdSchema,
    "checker": IdentifierStyleSchema,
    "perlinOctaves": AppBuildIdSchema,
    "tileIds": RequiredBiomeValuesSchema,
    "alpha": AppBuildIdSchema,
    "tileXOffset": AppBuildIdSchema,
    "invalidated": AppBuildIdSchema,
    "xModulo": AppBuildIdSchema,
    "size": AppBuildIdSchema,
    "chance": AppBuildIdSchema,
    "breakOnMatch": AppBuildIdSchema,
    "tileYOffset": AppBuildIdSchema,
    "uid": AppBuildIdSchema,
    "perlinSeed": AppBuildIdSchema,
    "yOffset": AppBuildIdSchema,
    "tileRandomYMax": AppBuildIdSchema,
    "tileRandomYMin": AppBuildIdSchema,
    "tileMode": IdentifierStyleSchema,
    "flipY": AppBuildIdSchema,
    "tileRandomXMax": AppBuildIdSchema,
    "pivotY": AppBuildIdSchema,
    "yModulo": AppBuildIdSchema,
    "active": AppBuildIdSchema,
    "xOffset": AppBuildIdSchema,
});
export type AutoRuleDefProperties = z.infer<typeof AutoRuleDefPropertiesSchema>;

export const DefinitionsSchema = z.object({
    "description": z.string(),
    "title": z.string(),
    "required": z.array(z.string()),
    "additionalProperties": z.boolean(),
    "properties": DefinitionsPropertiesSchema,
    "type": z.array(ForcedRefsTypeSchema),
});
export type Definitions = z.infer<typeof DefinitionsSchema>;

export const EntityDefSchema = z.object({
    "title": z.string(),
    "required": z.array(z.string()),
    "additionalProperties": z.boolean(),
    "properties": EntityDefPropertiesSchema,
    "type": z.array(ForcedRefsTypeSchema),
});
export type EntityDef = z.infer<typeof EntityDefSchema>;

export const EntityInstanceSchema = z.object({
    "title": z.string(),
    "required": z.array(z.string()),
    "additionalProperties": z.boolean(),
    "properties": EntityInstancePropertiesSchema,
    "type": z.array(ForcedRefsTypeSchema),
});
export type EntityInstance = z.infer<typeof EntityInstanceSchema>;

export const EnumDefSchema = z.object({
    "title": z.string(),
    "required": z.array(z.string()),
    "additionalProperties": z.boolean(),
    "properties": EnumDefPropertiesSchema,
    "type": z.array(ForcedRefsTypeSchema),
});
export type EnumDef = z.infer<typeof EnumDefSchema>;

export const EnumDefValuesSchema = z.object({
    "title": z.string(),
    "required": z.array(z.string()),
    "additionalProperties": z.boolean(),
    "properties": EnumDefValuesPropertiesSchema,
    "type": z.array(ForcedRefsTypeSchema),
});
export type EnumDefValues = z.infer<typeof EnumDefValuesSchema>;

export const EnumTagValueSchema = z.object({
    "description": z.string(),
    "title": z.string(),
    "required": z.array(z.string()),
    "additionalProperties": z.boolean(),
    "properties": EnumTagValuePropertiesSchema,
    "type": z.array(ForcedRefsTypeSchema),
});
export type EnumTagValue = z.infer<typeof EnumTagValueSchema>;

export const FieldDefSchema = z.object({
    "description": z.string(),
    "title": z.string(),
    "required": z.array(z.string()),
    "additionalProperties": z.boolean(),
    "properties": FieldDefPropertiesSchema,
    "type": z.array(ForcedRefsTypeSchema),
});
export type FieldDef = z.infer<typeof FieldDefSchema>;

export const FieldInstancePropertiesSchema = z.object({
    "__type": AppBuildIdSchema,
    "defUid": AppBuildIdSchema,
    "__identifier": AppBuildIdSchema,
    "__tile": IconSchema,
    "realEditorValues": RealEditorValuesSchema,
    "__value": DefaultOverrideSchema,
});
export type FieldInstanceProperties = z.infer<typeof FieldInstancePropertiesSchema>;

export const IntGridValueDefSchema = z.object({
    "description": z.string(),
    "title": z.string(),
    "required": z.array(z.string()),
    "additionalProperties": z.boolean(),
    "properties": IntGridValueDefPropertiesSchema,
    "type": z.array(ForcedRefsTypeSchema),
});
export type IntGridValueDef = z.infer<typeof IntGridValueDefSchema>;

export const LayerDefSchema = z.object({
    "title": z.string(),
    "required": z.array(z.string()),
    "additionalProperties": z.boolean(),
    "properties": LayerDefPropertiesSchema,
    "type": z.array(ForcedRefsTypeSchema),
});
export type LayerDef = z.infer<typeof LayerDefSchema>;

export const LayerInstanceSchema = z.object({
    "title": z.string(),
    "required": z.array(z.string()),
    "additionalProperties": z.boolean(),
    "properties": LayerInstancePropertiesSchema,
    "type": z.array(ForcedRefsTypeSchema),
});
export type LayerInstance = z.infer<typeof LayerInstanceSchema>;

export const LevelSchema = z.object({
    "description": z.string(),
    "title": z.string(),
    "required": z.array(z.string()),
    "additionalProperties": z.boolean(),
    "properties": LevelPropertiesSchema,
    "type": z.array(ForcedRefsTypeSchema),
});
export type Level = z.infer<typeof LevelSchema>;

export const LevelBgPosInfosSchema = z.object({
    "description": z.string(),
    "title": z.string(),
    "required": z.array(z.string()),
    "additionalProperties": z.boolean(),
    "properties": LevelBgPosInfosPropertiesSchema,
    "type": z.array(ForcedRefsTypeSchema),
});
export type LevelBgPosInfos = z.infer<typeof LevelBgPosInfosSchema>;

export const TableOfContentEntrySchema = z.object({
    "title": z.string(),
    "required": z.array(z.string()),
    "additionalProperties": z.boolean(),
    "properties": TableOfContentEntryPropertiesSchema,
    "type": z.array(ForcedRefsTypeSchema),
});
export type TableOfContentEntry = z.infer<typeof TableOfContentEntrySchema>;

export const TileSchema = z.object({
    "description": z.string(),
    "title": z.string(),
    "required": z.array(z.string()),
    "additionalProperties": z.boolean(),
    "properties": TilePropertiesSchema,
    "type": z.array(ForcedRefsTypeSchema),
});
export type Tile = z.infer<typeof TileSchema>;

export const TilesetDefSchema = z.object({
    "description": z.string(),
    "title": z.string(),
    "required": z.array(z.string()),
    "additionalProperties": z.boolean(),
    "properties": TilesetDefPropertiesSchema,
    "type": z.array(ForcedRefsTypeSchema),
});
export type TilesetDef = z.infer<typeof TilesetDefSchema>;

export const WorldSchema = z.object({
    "description": z.string(),
    "title": z.string(),
    "required": z.array(z.string()),
    "additionalProperties": z.boolean(),
    "properties": WorldPropertiesSchema,
    "type": z.array(ForcedRefsTypeSchema),
});
export type World = z.infer<typeof WorldSchema>;

export const LdtkJsonRootSchema = z.object({
    "description": z.string(),
    "title": z.string(),
    "required": z.array(z.string()),
    "properties": LdtkJsonRootPropertiesSchema,
    "type": z.array(ForcedRefsTypeSchema),
});
export type LdtkJsonRoot = z.infer<typeof LdtkJsonRootSchema>;

export const AutoLayerRuleGroupSchema = z.object({
    "title": z.string(),
    "required": z.array(z.string()),
    "additionalProperties": z.boolean(),
    "properties": AutoLayerRuleGroupPropertiesSchema,
    "type": z.array(ForcedRefsTypeSchema),
});
export type AutoLayerRuleGroup = z.infer<typeof AutoLayerRuleGroupSchema>;

export const AutoRuleDefSchema = z.object({
    "description": z.string(),
    "title": z.string(),
    "required": z.array(z.string()),
    "additionalProperties": z.boolean(),
    "properties": AutoRuleDefPropertiesSchema,
    "type": z.array(ForcedRefsTypeSchema),
});
export type AutoRuleDef = z.infer<typeof AutoRuleDefSchema>;

export const FieldInstanceSchema = z.object({
    "title": z.string(),
    "required": z.array(z.string()),
    "additionalProperties": z.boolean(),
    "properties": FieldInstancePropertiesSchema,
    "type": z.array(ForcedRefsTypeSchema),
});
export type FieldInstance = z.infer<typeof FieldInstanceSchema>;

export const OtherTypesSchema = z.object({
    "TilesetRect": TilesetRectSchema,
    "FieldInstance": FieldInstanceSchema,
    "EntityInstance": EntityInstanceSchema,
    "Definitions": DefinitionsSchema,
    "EnumTagValue": EnumTagValueSchema,
    "AutoRuleDef": AutoRuleDefSchema,
    "FieldDef": FieldDefSchema,
    "CustomCommand": CustomCommandSchema,
    "EntityDef": EntityDefSchema,
    "AutoLayerRuleGroup": AutoLayerRuleGroupSchema,
    "IntGridValueGroupDef": IntGridValueGroupDefSchema,
    "IntGridValueInstance": IntGridValueInstanceSchema,
    "TocInstanceData": TocInstanceDataSchema,
    "NeighbourLevel": NeighbourLevelSchema,
    "LayerInstance": LayerInstanceSchema,
    "World": WorldSchema,
    "EntityReferenceInfos": EntityReferenceInfosSchema,
    "TileCustomMetadata": TileCustomMetadataSchema,
    "TilesetDef": TilesetDefSchema,
    "EnumDefValues": EnumDefValuesSchema,
    "Tile": TileSchema,
    "LayerDef": LayerDefSchema,
    "LevelBgPosInfos": LevelBgPosInfosSchema,
    "Level": LevelSchema,
    "TableOfContentEntry": TableOfContentEntrySchema,
    "EnumDef": EnumDefSchema,
    "GridPoint": GridPointSchema,
    "IntGridValueDef": IntGridValueDefSchema,
});
export type OtherTypes = z.infer<typeof OtherTypesSchema>;

export const TypesSchema = z.object({
    "description": z.string(),
    "title": z.string(),
    "$schema": z.string(),
    "$ref": z.string(),
    "version": z.string(),
    "LdtkJsonRoot": LdtkJsonRootSchema,
    "otherTypes": OtherTypesSchema,
});
export type Types = z.infer<typeof TypesSchema>;
