 # Collecting Values
r_r=int(input("")) 
r_c=int(input("")) 
cor=list(map(str,input("").strip().split())) 
cc=list(map(int,input("").strip().split())) 
reg_no=list(map(str,input("").strip().split()))
print()
    # Initialization of index and count of hall 
reg_no_cc=[];
reg_index=0;
for i in range(0,len(cc)):
            reg_no_cc.append(reg_no[i].split("D"));
index=0 
c=0 
while(True): 
     # Create unfilled Hall 
        a=[] 
        b=[]
        for i in range(r_r+2): 
            a.append(["X" for j in range(r_c+2)])
        for i in range(r_r+2):
           b.append(["XXXXXXXXXXXXXX" for j in range(r_c+2)])
        # Hall arrangment starts 
     
        for j in range(1,r_c+1): 
            for i in range(1,r_r+1): 
                if(sum(cc)==0):break #While all the students are settle down break the loop
                # Remove the filled courses 
                while(True): 
                    try: 
                        index1=cc.index(0) 
                    
                        cc.remove(cc[index1%len(cc)]) 
                        cor.remove(cor[index1%len(cor)]) 
                        reg_no_cc.remove(reg_no_cc[index1%len(reg_no)])
                    except: 
                        break
                # Indexing 
                index=index%len(cc) 
                # Ex: If Course A have no of student > 0 and their is no student at the NEWS position then place a student studing 
                #couese A 
                if(a[i][j-1]!=cor[index] and a[i][j+1]!=cor[index] and a[i-1][j]!=cor[index] and a[i+1][j]!=cor[index]and cc[index]!=0):
                        reg_index=index;
                        t=cor[index]+'-'+reg_no_cc[reg_index][0]+"D"+reg_no_cc[reg_index][1]
                        reg_no_cc[reg_index][1]=int( reg_no_cc[reg_index][1])+1
                        if int( reg_no_cc[reg_index][1])<10:
                            reg_no_cc[reg_index][1]="00"+ str(reg_no_cc[reg_index][1])
                        elif int( reg_no_cc[reg_index][1])>9 and int( reg_no_cc[reg_index][1])<100:
                           reg_no_cc[reg_index][1]="0"+str( reg_no_cc[reg_index][1])
                        else:
                           reg_no_cc[reg_index][1]=str( reg_no_cc[reg_index][1])
    
                        a[i][j]=cor[index] 
                        b[i][j]=t
                        cc[index]-=1 
                index+=1 # increase the Index 
            if(sum(cc)==0):break #While all the students are settle down break the loop 
        c+=1 # Incre ment the hall Count 
        #print the hall arrangement 
        for i in b[1:r_r+1]: 
            for j in i[1:r_c+1]: 
                print(j,end=" ") 
            print() 
        print() 
     
        if(sum(cc)==0):break #While all the students are settle down break the loop 
print("Total Number of halls: ",c) #Print the No. of halls allocated