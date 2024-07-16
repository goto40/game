import * as z from "zod";

// Possible values: `Manual`, `AfterLoad`, `BeforeSave`, `AfterSave`

export const WhenSchema = z.enum([
    "AfterLoad",
    "AfterSave",
    "BeforeSave",
    "Manual",
]);
export type When = z.infer<typeof WhenSchema>;

// Possible values: `Any`, `OnlySame`, `OnlyTags`, `OnlySpecificEntity`

export const AllowedRefsSchema = z.enum([
    "Any",
    "OnlySame",
    "OnlySpecificEntity",
    "OnlyTags",
]);
export type AllowedRefs = z.infer<typeof AllowedRefsSchema>;

// Possible values: `Hidden`, `ValueOnly`, `NameAndValue`, `EntityTile`, `LevelTile`,
// `Points`, `PointStar`, `PointPath`, `PointPathLoop`, `RadiusPx`, `RadiusGrid`,
// `ArrayCountWithLabel`, `ArrayCountNoLabel`, `RefLinkBetweenPivots`,
// `RefLinkBetweenCenters`

export const EditorDisplayModeSchema = z.enum([
    "ArrayCountNoLabel",
    "ArrayCountWithLabel",
    "EntityTile",
    "Hidden",
    "LevelTile",
    "NameAndValue",
    "PointPath",
    "PointPathLoop",
    "PointStar",
    "Points",
    "RadiusGrid",
    "RadiusPx",
    "RefLinkBetweenCenters",
    "RefLinkBetweenPivots",
    "ValueOnly",
]);
export type EditorDisplayMode = z.infer<typeof EditorDisplayModeSchema>;

// Possible values: `Above`, `Center`, `Beneath`

export const EditorDisplayPosSchema = z.enum([
    "Above",
    "Beneath",
    "Center",
]);
export type EditorDisplayPos = z.infer<typeof EditorDisplayPosSchema>;

// Possible values: `ZigZag`, `StraightArrow`, `CurvedArrow`, `ArrowsLine`, `DashedLine`

export const EditorLinkStyleSchema = z.enum([
    "ArrowsLine",
    "CurvedArrow",
    "DashedLine",
    "StraightArrow",
    "ZigZag",
]);
export type EditorLinkStyle = z.infer<typeof EditorLinkStyleSchema>;


export const TextLanguageModeSchema = z.enum([
    "LangC",
    "LangHaxe",
    "LangJS",
    "LangJson",
    "LangLog",
    "LangLua",
    "LangMarkdown",
    "LangPython",
    "LangRuby",
    "LangXml",
]);
export type TextLanguageMode = z.infer<typeof TextLanguageModeSchema>;

// Possible values: `DiscardOldOnes`, `PreventAdding`, `MoveLastOne`

export const LimitBehaviorSchema = z.enum([
    "DiscardOldOnes",
    "MoveLastOne",
    "PreventAdding",
]);
export type LimitBehavior = z.infer<typeof LimitBehaviorSchema>;

// If TRUE, the maxCount is a "per world" limit, if FALSE, it's a "per level". Possible
// values: `PerLayer`, `PerLevel`, `PerWorld`

export const LimitScopeSchema = z.enum([
    "PerLayer",
    "PerLevel",
    "PerWorld",
]);
export type LimitScope = z.infer<typeof LimitScopeSchema>;

// Possible values: `Rectangle`, `Ellipse`, `Tile`, `Cross`

export const RenderModeSchema = z.enum([
    "Cross",
    "Ellipse",
    "Rectangle",
    "Tile",
]);
export type RenderMode = z.infer<typeof RenderModeSchema>;

// An enum describing how the the Entity tile is rendered inside the Entity bounds. Possible
// values: `Cover`, `FitInside`, `Repeat`, `Stretch`, `FullSizeCropped`,
// `FullSizeUncropped`, `NineSlice`

export const TileRenderModeSchema = z.enum([
    "Cover",
    "FitInside",
    "FullSizeCropped",
    "FullSizeUncropped",
    "NineSlice",
    "Repeat",
    "Stretch",
]);
export type TileRenderMode = z.infer<typeof TileRenderModeSchema>;

// Checker mode Possible values: `None`, `Horizontal`, `Vertical`

export const CheckerSchema = z.enum([
    "Horizontal",
    "None",
    "Vertical",
]);
export type Checker = z.infer<typeof CheckerSchema>;

// Defines how tileIds array is used Possible values: `Single`, `Stamp`

export const TileModeSchema = z.enum([
    "Single",
    "Stamp",
]);
export type TileMode = z.infer<typeof TileModeSchema>;

// Type of the layer as Haxe Enum Possible values: `IntGrid`, `Entities`, `Tiles`,
// `AutoLayer`

export const TypeSchema = z.enum([
    "AutoLayer",
    "Entities",
    "IntGrid",
    "Tiles",
]);
export type Type = z.infer<typeof TypeSchema>;


export const EmbedAtlasSchema = z.enum([
    "LdtkIcons",
]);
export type EmbedAtlas = z.infer<typeof EmbedAtlasSchema>;


export const FlagSchema = z.enum([
    "DiscardPreCsvIntGrid",
    "ExportOldTableOfContentData",
    "ExportPreCsvIntGridFormat",
    "IgnoreBackupSuggest",
    "MultiWorlds",
    "PrependIndexToLevelFileNames",
    "UseMultilinesType",
]);
export type Flag = z.infer<typeof FlagSchema>;


export const BgPosSchema = z.enum([
    "Contain",
    "Cover",
    "CoverDirty",
    "Repeat",
    "Unscaled",
]);
export type BgPos = z.infer<typeof BgPosSchema>;


export const WorldLayoutSchema = z.enum([
    "Free",
    "GridVania",
    "LinearHorizontal",
    "LinearVertical",
]);
export type WorldLayout = z.infer<typeof WorldLayoutSchema>;

// Naming convention for Identifiers (first-letter uppercase, full uppercase etc.) Possible
// values: `Capitalize`, `Uppercase`, `Lowercase`, `Free`

export const IdentifierStyleSchema = z.enum([
    "Capitalize",
    "Free",
    "Lowercase",
    "Uppercase",
]);
export type IdentifierStyle = z.infer<typeof IdentifierStyleSchema>;

// "Image export" option when saving project. Possible values: `None`, `OneImagePerLayer`,
// `OneImagePerLevel`, `LayersAndLevels`

export const ImageExportModeSchema = z.enum([
    "LayersAndLevels",
    "None",
    "OneImagePerLayer",
    "OneImagePerLevel",
]);
export type ImageExportMode = z.infer<typeof ImageExportModeSchema>;

export const LdtkCustomCommandSchema = z.object({
    "command": z.string(),
    "when": WhenSchema,
});
export type LdtkCustomCommand = z.infer<typeof LdtkCustomCommandSchema>;

export const FieldDefinitionSchema = z.object({
    "__type": z.string(),
    "acceptFileTypes": z.union([z.array(z.string()), z.null()]).optional(),
    "allowedRefs": AllowedRefsSchema,
    "allowedRefsEntityUid": z.union([z.number(), z.null()]).optional(),
    "allowedRefTags": z.array(z.string()),
    "allowOutOfLevelRef": z.boolean(),
    "arrayMaxLength": z.union([z.number(), z.null()]).optional(),
    "arrayMinLength": z.union([z.number(), z.null()]).optional(),
    "autoChainRef": z.boolean(),
    "canBeNull": z.boolean(),
    "defaultOverride": z.any().optional(),
    "doc": z.union([z.null(), z.string()]).optional(),
    "editorAlwaysShow": z.boolean(),
    "editorCutLongValues": z.boolean(),
    "editorDisplayColor": z.union([z.null(), z.string()]).optional(),
    "editorDisplayMode": EditorDisplayModeSchema,
    "editorDisplayPos": EditorDisplayPosSchema,
    "editorDisplayScale": z.number(),
    "editorLinkStyle": EditorLinkStyleSchema,
    "editorShowInWorld": z.boolean(),
    "editorTextPrefix": z.union([z.null(), z.string()]).optional(),
    "editorTextSuffix": z.union([z.null(), z.string()]).optional(),
    "exportToToc": z.boolean(),
    "identifier": z.string(),
    "isArray": z.boolean(),
    "max": z.union([z.number(), z.null()]).optional(),
    "min": z.union([z.number(), z.null()]).optional(),
    "regex": z.union([z.null(), z.string()]).optional(),
    "searchable": z.boolean(),
    "symmetricalRef": z.boolean(),
    "textLanguageMode": z.union([TextLanguageModeSchema, z.null()]).optional(),
    "tilesetUid": z.union([z.number(), z.null()]).optional(),
    "type": z.string(),
    "uid": z.number(),
    "useForSmartColor": z.boolean(),
});
export type FieldDefinition = z.infer<typeof FieldDefinitionSchema>;

export const TilesetRectangleSchema = z.object({
    "h": z.number(),
    "tilesetUid": z.number(),
    "w": z.number(),
    "x": z.number(),
    "y": z.number(),
});
export type TilesetRectangle = z.infer<typeof TilesetRectangleSchema>;

export const EnumValueDefinitionSchema = z.object({
    "__tileSrcRect": z.union([z.array(z.number()), z.null()]).optional(),
    "color": z.number(),
    "id": z.string(),
    "tileId": z.union([z.number(), z.null()]).optional(),
    "tileRect": z.union([TilesetRectangleSchema, z.null()]).optional(),
});
export type EnumValueDefinition = z.infer<typeof EnumValueDefinitionSchema>;

export const AutoLayerRuleDefinitionSchema = z.object({
    "active": z.boolean(),
    "alpha": z.number(),
    "breakOnMatch": z.boolean(),
    "chance": z.number(),
    "checker": CheckerSchema,
    "flipX": z.boolean(),
    "flipY": z.boolean(),
    "invalidated": z.boolean(),
    "outOfBoundsValue": z.union([z.number(), z.null()]).optional(),
    "pattern": z.array(z.number()),
    "perlinActive": z.boolean(),
    "perlinOctaves": z.number(),
    "perlinScale": z.number(),
    "perlinSeed": z.number(),
    "pivotX": z.number(),
    "pivotY": z.number(),
    "size": z.number(),
    "tileIds": z.union([z.array(z.number()), z.null()]).optional(),
    "tileMode": TileModeSchema,
    "tileRandomXMax": z.number(),
    "tileRandomXMin": z.number(),
    "tileRandomYMax": z.number(),
    "tileRandomYMin": z.number(),
    "tileRectsIds": z.array(z.array(z.number())),
    "tileXOffset": z.number(),
    "tileYOffset": z.number(),
    "uid": z.number(),
    "xModulo": z.number(),
    "xOffset": z.number(),
    "yModulo": z.number(),
    "yOffset": z.number(),
});
export type AutoLayerRuleDefinition = z.infer<typeof AutoLayerRuleDefinitionSchema>;

export const IntGridValueDefinitionSchema = z.object({
    "color": z.string(),
    "groupUid": z.number(),
    "identifier": z.union([z.null(), z.string()]).optional(),
    "tile": z.union([TilesetRectangleSchema, z.null()]).optional(),
    "value": z.number(),
});
export type IntGridValueDefinition = z.infer<typeof IntGridValueDefinitionSchema>;

export const IntGridValueGroupDefinitionSchema = z.object({
    "color": z.union([z.null(), z.string()]).optional(),
    "identifier": z.union([z.null(), z.string()]).optional(),
    "uid": z.number(),
});
export type IntGridValueGroupDefinition = z.infer<typeof IntGridValueGroupDefinitionSchema>;

export const TileCustomMetadataSchema = z.object({
    "data": z.string(),
    "tileId": z.number(),
});
export type TileCustomMetadata = z.infer<typeof TileCustomMetadataSchema>;

export const EnumTagValueSchema = z.object({
    "enumValueId": z.string(),
    "tileIds": z.array(z.number()),
});
export type EnumTagValue = z.infer<typeof EnumTagValueSchema>;

export const FieldInstanceSchema = z.object({
    "__identifier": z.string(),
    "__tile": z.union([TilesetRectangleSchema, z.null()]).optional(),
    "__type": z.string(),
    "__value": z.any(),
    "defUid": z.number(),
    "realEditorValues": z.array(z.any()),
});
export type FieldInstance = z.infer<typeof FieldInstanceSchema>;

export const ReferenceToAnEntityInstanceSchema = z.object({
    "entityIid": z.string(),
    "layerIid": z.string(),
    "levelIid": z.string(),
    "worldIid": z.string(),
});
export type ReferenceToAnEntityInstance = z.infer<typeof ReferenceToAnEntityInstanceSchema>;

export const GridPointSchema = z.object({
    "cx": z.number(),
    "cy": z.number(),
});
export type GridPoint = z.infer<typeof GridPointSchema>;

export const IntGridValueInstanceSchema = z.object({
    "coordId": z.number(),
    "v": z.number(),
});
export type IntGridValueInstance = z.infer<typeof IntGridValueInstanceSchema>;

export const TileInstanceSchema = z.object({
    "a": z.number(),
    "d": z.array(z.number()),
    "f": z.number(),
    "px": z.array(z.number()),
    "src": z.array(z.number()),
    "t": z.number(),
});
export type TileInstance = z.infer<typeof TileInstanceSchema>;

export const LevelBackgroundPositionSchema = z.object({
    "cropRect": z.array(z.number()),
    "scale": z.array(z.number()),
    "topLeftPx": z.array(z.number()),
});
export type LevelBackgroundPosition = z.infer<typeof LevelBackgroundPositionSchema>;

export const NeighbourLevelSchema = z.object({
    "dir": z.string(),
    "levelIid": z.string(),
    "levelUid": z.union([z.number(), z.null()]).optional(),
});
export type NeighbourLevel = z.infer<typeof NeighbourLevelSchema>;

export const LdtkTocInstanceDataSchema = z.object({
    "fields": z.any(),
    "heiPx": z.number(),
    "iids": ReferenceToAnEntityInstanceSchema,
    "widPx": z.number(),
    "worldX": z.number(),
    "worldY": z.number(),
});
export type LdtkTocInstanceData = z.infer<typeof LdtkTocInstanceDataSchema>;

export const EntityDefinitionSchema = z.object({
    "allowOutOfBounds": z.boolean(),
    "color": z.string(),
    "doc": z.union([z.null(), z.string()]).optional(),
    "exportToToc": z.boolean(),
    "fieldDefs": z.array(FieldDefinitionSchema),
    "fillOpacity": z.number(),
    "height": z.number(),
    "hollow": z.boolean(),
    "identifier": z.string(),
    "keepAspectRatio": z.boolean(),
    "limitBehavior": LimitBehaviorSchema,
    "limitScope": LimitScopeSchema,
    "lineOpacity": z.number(),
    "maxCount": z.number(),
    "maxHeight": z.union([z.number(), z.null()]).optional(),
    "maxWidth": z.union([z.number(), z.null()]).optional(),
    "minHeight": z.union([z.number(), z.null()]).optional(),
    "minWidth": z.union([z.number(), z.null()]).optional(),
    "nineSliceBorders": z.array(z.number()),
    "pivotX": z.number(),
    "pivotY": z.number(),
    "renderMode": RenderModeSchema,
    "resizableX": z.boolean(),
    "resizableY": z.boolean(),
    "showName": z.boolean(),
    "tags": z.array(z.string()),
    "tileId": z.union([z.number(), z.null()]).optional(),
    "tileOpacity": z.number(),
    "tileRect": z.union([TilesetRectangleSchema, z.null()]).optional(),
    "tileRenderMode": TileRenderModeSchema,
    "tilesetId": z.union([z.number(), z.null()]).optional(),
    "uid": z.number(),
    "uiTileRect": z.union([TilesetRectangleSchema, z.null()]).optional(),
    "width": z.number(),
});
export type EntityDefinition = z.infer<typeof EntityDefinitionSchema>;

export const EnumDefinitionSchema = z.object({
    "externalFileChecksum": z.union([z.null(), z.string()]).optional(),
    "externalRelPath": z.union([z.null(), z.string()]).optional(),
    "iconTilesetUid": z.union([z.number(), z.null()]).optional(),
    "identifier": z.string(),
    "tags": z.array(z.string()),
    "uid": z.number(),
    "values": z.array(EnumValueDefinitionSchema),
});
export type EnumDefinition = z.infer<typeof EnumDefinitionSchema>;

export const AutoLayerRuleGroupSchema = z.object({
    "active": z.boolean(),
    "biomeRequirementMode": z.number(),
    "collapsed": z.union([z.boolean(), z.null()]).optional(),
    "color": z.union([z.null(), z.string()]).optional(),
    "icon": z.union([TilesetRectangleSchema, z.null()]).optional(),
    "isOptional": z.boolean(),
    "name": z.string(),
    "requiredBiomeValues": z.array(z.string()),
    "rules": z.array(AutoLayerRuleDefinitionSchema),
    "uid": z.number(),
    "usesWizard": z.boolean(),
});
export type AutoLayerRuleGroup = z.infer<typeof AutoLayerRuleGroupSchema>;

export const TilesetDefinitionSchema = z.object({
    "__cHei": z.number(),
    "__cWid": z.number(),
    "cachedPixelData": z.union([z.record(z.string(), z.any()), z.null()]).optional(),
    "customData": z.array(TileCustomMetadataSchema),
    "embedAtlas": z.union([EmbedAtlasSchema, z.null()]).optional(),
    "enumTags": z.array(EnumTagValueSchema),
    "identifier": z.string(),
    "padding": z.number(),
    "pxHei": z.number(),
    "pxWid": z.number(),
    "relPath": z.union([z.null(), z.string()]).optional(),
    "savedSelections": z.array(z.record(z.string(), z.any())),
    "spacing": z.number(),
    "tags": z.array(z.string()),
    "tagsSourceEnumUid": z.union([z.number(), z.null()]).optional(),
    "tileGridSize": z.number(),
    "uid": z.number(),
});
export type TilesetDefinition = z.infer<typeof TilesetDefinitionSchema>;

export const EntityInstanceSchema = z.object({
    "__grid": z.array(z.number()),
    "__identifier": z.string(),
    "__pivot": z.array(z.number()),
    "__smartColor": z.string(),
    "__tags": z.array(z.string()),
    "__tile": z.union([TilesetRectangleSchema, z.null()]).optional(),
    "__worldX": z.union([z.number(), z.null()]).optional(),
    "__worldY": z.union([z.number(), z.null()]).optional(),
    "defUid": z.number(),
    "fieldInstances": z.array(FieldInstanceSchema),
    "height": z.number(),
    "iid": z.string(),
    "px": z.array(z.number()),
    "width": z.number(),
});
export type EntityInstance = z.infer<typeof EntityInstanceSchema>;

export const LayerInstanceSchema = z.object({
    "__cHei": z.number(),
    "__cWid": z.number(),
    "__gridSize": z.number(),
    "__identifier": z.string(),
    "__opacity": z.number(),
    "__pxTotalOffsetX": z.number(),
    "__pxTotalOffsetY": z.number(),
    "__tilesetDefUid": z.union([z.number(), z.null()]).optional(),
    "__tilesetRelPath": z.union([z.null(), z.string()]).optional(),
    "__type": z.string(),
    "autoLayerTiles": z.array(TileInstanceSchema),
    "entityInstances": z.array(EntityInstanceSchema),
    "gridTiles": z.array(TileInstanceSchema),
    "iid": z.string(),
    "intGrid": z.union([z.array(IntGridValueInstanceSchema), z.null()]).optional(),
    "intGridCsv": z.array(z.number()),
    "layerDefUid": z.number(),
    "levelId": z.number(),
    "optionalRules": z.array(z.number()),
    "overrideTilesetUid": z.union([z.number(), z.null()]).optional(),
    "pxOffsetX": z.number(),
    "pxOffsetY": z.number(),
    "seed": z.number(),
    "visible": z.boolean(),
});
export type LayerInstance = z.infer<typeof LayerInstanceSchema>;

export const LevelSchema = z.object({
    "__bgColor": z.string(),
    "__bgPos": z.union([LevelBackgroundPositionSchema, z.null()]).optional(),
    "__neighbours": z.array(NeighbourLevelSchema),
    "__smartColor": z.string(),
    "bgColor": z.union([z.null(), z.string()]).optional(),
    "bgPivotX": z.number(),
    "bgPivotY": z.number(),
    "bgPos": z.union([BgPosSchema, z.null()]).optional(),
    "bgRelPath": z.union([z.null(), z.string()]).optional(),
    "externalRelPath": z.union([z.null(), z.string()]).optional(),
    "fieldInstances": z.array(FieldInstanceSchema),
    "identifier": z.string(),
    "iid": z.string(),
    "layerInstances": z.union([z.array(LayerInstanceSchema), z.null()]).optional(),
    "pxHei": z.number(),
    "pxWid": z.number(),
    "uid": z.number(),
    "useAutoIdentifier": z.boolean(),
    "worldDepth": z.number(),
    "worldX": z.number(),
    "worldY": z.number(),
});
export type Level = z.infer<typeof LevelSchema>;

export const LdtkTableOfContentEntrySchema = z.object({
    "identifier": z.string(),
    "instances": z.array(ReferenceToAnEntityInstanceSchema).optional(),
    "instancesData": z.array(LdtkTocInstanceDataSchema),
});
export type LdtkTableOfContentEntry = z.infer<typeof LdtkTableOfContentEntrySchema>;

export const WorldSchema = z.object({
    "defaultLevelHeight": z.number(),
    "defaultLevelWidth": z.number(),
    "identifier": z.string(),
    "iid": z.string(),
    "levels": z.array(LevelSchema),
    "worldGridHeight": z.number(),
    "worldGridWidth": z.number(),
    "worldLayout": z.union([WorldLayoutSchema, z.null()]),
});
export type World = z.infer<typeof WorldSchema>;

export const LayerDefinitionSchema = z.object({
    "__type": z.string(),
    "autoRuleGroups": z.array(AutoLayerRuleGroupSchema),
    "autoSourceLayerDefUid": z.union([z.number(), z.null()]).optional(),
    "autoTilesetDefUid": z.union([z.number(), z.null()]).optional(),
    "autoTilesKilledByOtherLayerUid": z.union([z.number(), z.null()]).optional(),
    "biomeFieldUid": z.union([z.number(), z.null()]).optional(),
    "canSelectWhenInactive": z.boolean(),
    "displayOpacity": z.number(),
    "doc": z.union([z.null(), z.string()]).optional(),
    "excludedTags": z.array(z.string()),
    "gridSize": z.number(),
    "guideGridHei": z.number(),
    "guideGridWid": z.number(),
    "hideFieldsWhenInactive": z.boolean(),
    "hideInList": z.boolean(),
    "identifier": z.string(),
    "inactiveOpacity": z.number(),
    "intGridValues": z.array(IntGridValueDefinitionSchema),
    "intGridValuesGroups": z.array(IntGridValueGroupDefinitionSchema),
    "parallaxFactorX": z.number(),
    "parallaxFactorY": z.number(),
    "parallaxScaling": z.boolean(),
    "pxOffsetX": z.number(),
    "pxOffsetY": z.number(),
    "renderInWorldView": z.boolean(),
    "requiredTags": z.array(z.string()),
    "tilePivotX": z.number(),
    "tilePivotY": z.number(),
    "tilesetDefUid": z.union([z.number(), z.null()]).optional(),
    "type": TypeSchema,
    "uiColor": z.union([z.null(), z.string()]).optional(),
    "uid": z.number(),
    "uiFilterTags": z.array(z.string()),
    "useAsyncRender": z.boolean(),
});
export type LayerDefinition = z.infer<typeof LayerDefinitionSchema>;

export const DefinitionsSchema = z.object({
    "entities": z.array(EntityDefinitionSchema),
    "enums": z.array(EnumDefinitionSchema),
    "externalEnums": z.array(EnumDefinitionSchema),
    "layers": z.array(LayerDefinitionSchema),
    "levelFields": z.array(FieldDefinitionSchema),
    "tilesets": z.array(TilesetDefinitionSchema),
});
export type Definitions = z.infer<typeof DefinitionsSchema>;

export const ForcedRefsSchema = z.object({
    "AutoLayerRuleGroup": AutoLayerRuleGroupSchema.optional(),
    "AutoRuleDef": AutoLayerRuleDefinitionSchema.optional(),
    "CustomCommand": LdtkCustomCommandSchema.optional(),
    "Definitions": DefinitionsSchema.optional(),
    "EntityDef": EntityDefinitionSchema.optional(),
    "EntityInstance": EntityInstanceSchema.optional(),
    "EntityReferenceInfos": ReferenceToAnEntityInstanceSchema.optional(),
    "EnumDef": EnumDefinitionSchema.optional(),
    "EnumDefValues": EnumValueDefinitionSchema.optional(),
    "EnumTagValue": EnumTagValueSchema.optional(),
    "FieldDef": FieldDefinitionSchema.optional(),
    "FieldInstance": FieldInstanceSchema.optional(),
    "GridPoint": GridPointSchema.optional(),
    "IntGridValueDef": IntGridValueDefinitionSchema.optional(),
    "IntGridValueGroupDef": IntGridValueGroupDefinitionSchema.optional(),
    "IntGridValueInstance": IntGridValueInstanceSchema.optional(),
    "LayerDef": LayerDefinitionSchema.optional(),
    "LayerInstance": LayerInstanceSchema.optional(),
    "Level": LevelSchema.optional(),
    "LevelBgPosInfos": LevelBackgroundPositionSchema.optional(),
    "NeighbourLevel": NeighbourLevelSchema.optional(),
    "TableOfContentEntry": LdtkTableOfContentEntrySchema.optional(),
    "Tile": TileInstanceSchema.optional(),
    "TileCustomMetadata": TileCustomMetadataSchema.optional(),
    "TilesetDef": TilesetDefinitionSchema.optional(),
    "TilesetRect": TilesetRectangleSchema.optional(),
    "TocInstanceData": LdtkTocInstanceDataSchema.optional(),
    "World": WorldSchema.optional(),
});
export type ForcedRefs = z.infer<typeof ForcedRefsSchema>;

export const TypesSchema = z.object({
    "__FORCED_REFS": ForcedRefsSchema.optional(),
    "appBuildId": z.number(),
    "backupLimit": z.number(),
    "backupOnSave": z.boolean(),
    "backupRelPath": z.union([z.null(), z.string()]).optional(),
    "bgColor": z.string(),
    "customCommands": z.array(LdtkCustomCommandSchema),
    "defaultEntityHeight": z.number(),
    "defaultEntityWidth": z.number(),
    "defaultGridSize": z.number(),
    "defaultLevelBgColor": z.string(),
    "defaultLevelHeight": z.union([z.number(), z.null()]).optional(),
    "defaultLevelWidth": z.union([z.number(), z.null()]).optional(),
    "defaultPivotX": z.number(),
    "defaultPivotY": z.number(),
    "defs": DefinitionsSchema,
    "dummyWorldIid": z.string(),
    "exportLevelBg": z.boolean(),
    "exportPng": z.union([z.boolean(), z.null()]).optional(),
    "exportTiled": z.boolean(),
    "externalLevels": z.boolean(),
    "flags": z.array(FlagSchema),
    "identifierStyle": IdentifierStyleSchema,
    "iid": z.string(),
    "imageExportMode": ImageExportModeSchema,
    "jsonVersion": z.string(),
    "levelNamePattern": z.string(),
    "levels": z.array(LevelSchema),
    "minifyJson": z.boolean(),
    "nextUid": z.number(),
    "pngFilePattern": z.union([z.null(), z.string()]).optional(),
    "simplifiedExport": z.boolean(),
    "toc": z.array(LdtkTableOfContentEntrySchema),
    "tutorialDesc": z.union([z.null(), z.string()]).optional(),
    "worldGridHeight": z.union([z.number(), z.null()]).optional(),
    "worldGridWidth": z.union([z.number(), z.null()]).optional(),
    "worldLayout": z.union([WorldLayoutSchema, z.null()]).optional(),
    "worlds": z.array(WorldSchema),
});
export type Types = z.infer<typeof TypesSchema>;
