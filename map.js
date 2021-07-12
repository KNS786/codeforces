/*Map Function*/
/*Array.prototype.map*/

class MyMaps{
	constructor(keys,values)
	{
		this.keys;
		this.values;
	}
	set(keys,values)
	{
		this[keys]=values;
		return this;
	}
	get(keys)
	{
	   if(!Object.hasOwnproperty(keys))return !!keys;
	    if(MyMaps[keys])
		{
			return MyMaps[keys];
		}
	}

}