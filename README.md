DIFFERENCES BETWEEN DEFAULT AND NAMED EXPORTS
     Default Export	                     Named Export
	Exactly one default export per module.  	Multiple named exports per module.
	Imported without curly braces {}.	        Imported with curly braces {}.
	Can be imported using any name.	            Must match the exact exported name (unless renamed with as).
	export default MyComponent;	                export const MyComponent = ...;