#include<iostream>
#define FASTIO ios_base::sync_with_stdio(0);cin.tie(0);cout.tie(0);
#define MAX 100000007	
using namespace std;
int main(){
	FASTIO;
	int n;
	cin>>n;
	int arr[n];
	   for(int i=0;i<n;i++)cin>>arr[i];
	   
	   for(int i=0;i<n-1;i++){
	       int j=0,m=1;
		 while(j<i+2){	 
		    for(int s=0;s<i+2;s++){
		      for(int p=s+1;p<i+2;p++){
		    if(arr[p]>arr[s]){
			 int temp=arr[p];
			arr[p]=arr[s];
			arr[s]=arr[p];
		    }
		  }
	   }
		sum+=((m++)+j)*arr[j];
		++j;
		
	}
	   if(MAX>sum)
		MAX=sum;
	    sum=0;
  }
	   
	   cout<<MAX;
	   return 0;
}
		   
	   
	   