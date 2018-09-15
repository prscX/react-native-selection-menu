
#import "RNSelectionMenu.h"

@implementation RNSelectionMenu

@synthesize bridge = _bridge;


- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}
RCT_EXPORT_MODULE()


RCT_EXPORT_METHOD(Show:(nonnull NSDictionary *)props onSelection:(RCTResponseSenderBlock)onSelection) {
    NSArray *values = [props objectForKey: @"values"];
    NSArray *selectionValues = [props objectForKey: @"selectedValues"];
    
    NSNumber *selectionType = [props objectForKey: @"selectionType"];
    NSNumber *presentationType = [props objectForKey: @"presentationType"];
    
    NSString *tickColor = [props objectForKey: @"tickColor"];
    NSString *title = [props objectForKey: @"title"];
    NSString *actionTitle = [props objectForKey: @"actionTitle"];

    NSNumber *enableSearch = [props objectForKey: @"enableSearch"];
    NSString *searchPlaceholder = [props objectForKey: @"searchPlaceholder"];
    NSString *searchTintColor = [props objectForKey: @"searchTintColor"];
    
    RSSelectionMenuBridge *selectionMenu = [[RSSelectionMenuBridge alloc] initWithSelectionType:[selectionType intValue] tickColor: [RNSelectionMenu ColorFromHexCode: tickColor] dataSource:values];

    if ([enableSearch intValue] == 1 || [presentationType intValue] == 2) {
        [selectionMenu searchWithPlaceHolder:searchPlaceholder tintColor: [RNSelectionMenu ColorFromHexCode: searchTintColor]];
    }

    [selectionMenu selectedWithItems: selectionValues];
    [selectionMenu setOnDismiss:^(NSArray<NSString *> * _Nonnull newSelectedValues) {
        onSelection(@[newSelectedValues]);
    }];
    
    id<UIApplicationDelegate> app = [[UIApplication sharedApplication] delegate];
    [selectionMenu showFrom: app.window.rootViewController presentationStyle:[presentationType intValue] title:title action: actionTitle];
}


+ (UIColor *) ColorFromHexCode:(NSString *)hexString {
    NSString *cleanString = [hexString stringByReplacingOccurrencesOfString:@"#" withString:@""];
    if([cleanString length] == 3) {
        cleanString = [NSString stringWithFormat:@"%@%@%@%@%@%@",
                       [cleanString substringWithRange:NSMakeRange(0, 1)],[cleanString substringWithRange:NSMakeRange(0, 1)],
                       [cleanString substringWithRange:NSMakeRange(1, 1)],[cleanString substringWithRange:NSMakeRange(1, 1)],
                       [cleanString substringWithRange:NSMakeRange(2, 1)],[cleanString substringWithRange:NSMakeRange(2, 1)]];
    }
    if([cleanString length] == 6) {
        cleanString = [cleanString stringByAppendingString:@"ff"];
    }
    
    unsigned int baseValue;
    [[NSScanner scannerWithString:cleanString] scanHexInt:&baseValue];
    
    float red = ((baseValue >> 24) & 0xFF)/255.0f;
    float green = ((baseValue >> 16) & 0xFF)/255.0f;
    float blue = ((baseValue >> 8) & 0xFF)/255.0f;
    float alpha = ((baseValue >> 0) & 0xFF)/255.0f;
    
    return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
}

@end
