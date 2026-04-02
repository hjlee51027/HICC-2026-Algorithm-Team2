NM = list(map(int, input().split()));
N = NM[0]; # 세로
M = NM[1]; # 가로

if (N == 1):
    print(1) # 세로 한 칸이면 못 움직임, 원래 있던 칸이 있으니까 1부터 세야 함.
elif (N == 2):
    print(min(4, ((M-1) // 2) + 1)) #4번보다 덜 움직일 때는 전부 한 번씩 안 써도 됨.
else:
    if (M < 7):
        print(min(4, M))
    else:
        print(M - 2) #다 쓴 다음부터는 효율적으로