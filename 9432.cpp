#include <bits/stdc++.h>

using namespace std;

string ltrim(const string &);
string rtrim(const string &);
vector<string> split(const string &);

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
 
 int _max(int a,int  b){return a > b ? a : b;}
 int _min(int a,int b){return a > b ? b : a;}

void miniMaxSum(vector<int> arr) {
 
     int k,ans=0,prev_ind,next_ind;
     int flip_ind=0,max=INT_MIN,min=INT_MAX;
   
     for(int i=0;i<arr.size();i++){
        if(i==0){
            for(int p=1;p<arr.size();p++){
                ans+=arr[p];
            }
            max=_max(max,ans);
            min=_min(min,ans);
            
        }else{
          
              k=1,ans=0;
                  for(int s=0;s<arr.size() && k<5;s++){
                        if(s!=i){
                            ans+=arr[s];
                        }
                      
                  }
                max=_max(ans,max);
                min=_min(ans,min);
              }
     }
              
     printf("%d %d\n",min,max);
         
}

int main()
{

    string arr_temp_temp;
    getline(cin, arr_temp_temp);

    vector<string> arr_temp = split(rtrim(arr_temp_temp));

    vector<int> arr(5);

    for (int i = 0; i < 5; i++) {
        int arr_item = stoi(arr_temp[i]);

        arr[i] = arr_item;
    }

    miniMaxSum(arr);

    return 0;
}

string ltrim(const string &str) {
    string s(str);

    s.erase(
        s.begin(),
        find_if(s.begin(), s.end(), not1(ptr_fun<int, int>(isspace)))
    );

    return s;
}

string rtrim(const string &str) {
    string s(str);

    s.erase(
        find_if(s.rbegin(), s.rend(), not1(ptr_fun<int, int>(isspace))).base(),
        s.end()
    );

    return s;
}

vector<string> split(const string &str) {
    vector<string> tokens;

    string::size_type start = 0;
    string::size_type end = 0;

    while ((end = str.find(" ", start)) != string::npos) {
        tokens.push_back(str.substr(start, end - start));

        start = end + 1;
    }

    tokens.push_back(str.substr(start));

    return tokens;
}
