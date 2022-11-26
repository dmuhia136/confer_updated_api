import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiBadRequestResponse, ApiCreatedResponse, ApiTags } from "@nestjs/swagger";
import { TransactionDto, WithdrawDto } from "src/Dto";
import { TransactionService } from "src/services/transaction.service";

@ApiTags("Transactions")
@Controller("transaction")
export class TransactionController{
constructor(private transaction: TransactionService){}
    @Post('/deposit')
    @ApiCreatedResponse({
        description: 'Wallet deposit successful',
      })
      @ApiBadRequestResponse({
        description:
          'Deposit was not completed',
      })
    async deposit(@Body() trans: TransactionDto) :Promise<any>{
        return this.transaction.deposit(trans)
    }
    
    @Get('/:id')
    @ApiCreatedResponse({
        description: 'Fetching transactions was successful',
      })
      @ApiBadRequestResponse({
        description:
          'Fetching failed',
      })
    async fetchTransactions(@Param("id") id:string):Promise<any>{
        return await this.transaction.fetchTransactions(id);
    }

    @Get('/')
    @ApiCreatedResponse({
        description: 'Fetching all transactions was successful',
      })
      @ApiBadRequestResponse({
        description:
          'Fetching failed',
      })

    async fetchAllTransactions():Promise<any>{
        return await this.transaction.fetchAllTransactions()
    }

    @Patch("/withdraw")
    async withdraw(@Body() trans: WithdrawDto){
        return await this.transaction.withdraw(trans)
    }
}