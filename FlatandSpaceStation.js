function spaceStation(n,c)
{
    var i=0;
    var m=c.length;
    var max=0;
    var diff=90;
    var j,x;
    var temp=1;
    for(i=0;i<n;i++)
    {
        temp=1;
        for(j=0;j<m;j++)
        {
            if(c[j]==i)
            {
                temp=0;
                break;
            }
        }
        if(temp!=0)
        {
            diff=Math.abs(c[0]-i);
            for(j=1;j<m;j++)
            {
                x=Math.abs(c[j]-i);
            if(x<diff)
            {
                diff =x;
            }
            }
            return max;
        }
        
        
    }
}