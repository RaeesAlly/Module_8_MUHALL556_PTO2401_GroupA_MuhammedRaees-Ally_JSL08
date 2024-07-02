let bankBranchInstance = null;
class BankBranch {
  
  constructor(branchInfo) {
   
    if (!bankBranchInstance) {
      
      this.branchInfo = branchInfo;
     
      bankBranchInstance = this;
    }
    
    return bankBranchInstance;
  }

  getBranchInfo() {
    return this.branchInfo;
  }
}

const branchA = new BankBranch({ name: 'Branch A', location: 'Downtown' });
const branchB = new BankBranch({ name: 'Branch B', location: 'Uptown' });

console.log(branchA.getBranchInfo()); 
console.log(branchB.getBranchInfo()); 
console.log(branchA === branchB); 
