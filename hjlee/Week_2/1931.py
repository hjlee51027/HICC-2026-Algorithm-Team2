n = int(input())
meetings = []

for i in range(n):
    start, end = map(int, input().split())
    meetings.append((end, start))

meetings.sort() # 종료 기준으로 배열해야 효율적임

count = 0
last_end = 0

for end, start in meetings:
    
    if (start >= last_end): # 전 회의 종료보다 이 회의 시작이 늦어야 받아줌
        count += 1
        last_end = end

print(count)