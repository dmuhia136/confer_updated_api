import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Transaction, TransDocument } from 'src/schema/transaction.schema';
import { Model } from 'mongoose';
import { TransactionDto, WithdrawDto } from 'src/Dto';

@Injectable()
export class TransactionService {
  constructor(
    @InjectModel(Transaction.name) private walletModel: Model<TransDocument>,
  ) {}

  async deposit(trans: TransactionDto) {
    try {
      const wallet=await this.walletModel.find({ owner: trans.owner });
  if(wallet.length ==0){
        var newWallet = new this.walletModel(trans);
          const data = await newWallet.save();
       return { status: true, body: data, message: 'wallet created' };
      }else{
        await this.walletModel.findOneAndUpdate(
                { owner: trans.owner },
                {
                  $inc: {
                    amount: trans.amount,
                  },
                },
              );
              return { status: true, message: `${trans.amount} has been deposited` };
      }
    } catch (error) {
      return { status: false, message: error.message };
    }
  }
  async fetchTransactions(id: string): Promise<any> {
    try {
      const result = await this.walletModel.find({ _id: id });
      return result;
    } catch (error) {
      return error.message;
    }
  }
  async fetchAllTransactions(): Promise<any> {
    try {
      const result = await this.walletModel.find();
      return result;
    } catch (error) {
      return error.message;
    }
  }

  async withdraw(trans: WithdrawDto): Promise<any> {
    try {

    await this.walletModel.findOneAndUpdate({ owner: trans.owner },{
      $inc:{
        amount: -trans.amount
      }
    }, { new: true, runValidators: true });
    return {status:true, message: `Withdrawal of ${trans.amount} completed`}
    } catch (error) {
      return { status: false, message: error.message };
    }
  }
}
