#import <Foundation/Foundation.h>

@interface Vehicle : NSObject {
	@public NSString *model;
}
-(void) startEngine;
@end

@implementation Vehicle
-(void) startEngine {
	NSLog(@"Starting engine");
}
-(id) init {
	NSLog(@"init called at %@", [self class]);
	model = @"Nissan";
	return self;
}
@end

@interface Car : Vehicle 
@end

@implementation Car
-(id) init {
	self = [super init];
	NSLog(@"init called at %@", [self class]);
	return self;
}
@end

int main() {
	@autoreleasepool {
		Car *obj = [Car alloc];
		[obj startEngine];
		[obj init];
		NSLog(@"%@", obj->model);
	}
	return 0;
}