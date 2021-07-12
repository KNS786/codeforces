for i in range(int(input())):
    x = int(input())
    sum=0
    for j in range(x/2):
        if(x%j==0):
            sum += j
    print(sum)
