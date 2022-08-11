<?php

namespace App\Http\Controllers;
use App\Models\Delivery;
use App\Models\AllUser;
use App\Models\Product;
use App\Models\Token;
use App\Http\Requests\StoreAllUserRequest;
use App\Http\Requests\UpdateAllUserRequest;
use Illuminate\Http\Request;
use Carbon\Carbon;
class AllUserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreAllUserRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreAllUserRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\AllUser  $allUser
     * @return \Illuminate\Http\Response
     */
    public function show(AllUser $allUser)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\AllUser  $allUser
     * @return \Illuminate\Http\Response
     */
    public function edit(AllUser $allUser)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateAllUserRequest  $request
     * @param  \App\Models\AllUser  $allUser
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateAllUserRequest $request, AllUser $allUser)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\AllUser  $allUser
     * @return \Illuminate\Http\Response
     */
    public function destroy(AllUser $allUser)
    {
        //
    }
    public function APIUser(Request $request)
    {
       return AllUser::where('id', $request->id)->first();
    }
    public function APIRegistration(Request $request)
    
    {
      
        $user= AllUser::where('type', $request->value)->get();
        if($user)
        {
            return $user;
        }
        return "nothing";
    }
    public function APIRequestedUser(Request $request)
    {
        $user= AllUser::where('status','requested')->get();
        if($user)
        {
            return $user;
        }
        return "nothing";
    }

    public function APIEditUserStatus(Request $request)
    {
        $user= AllUser::where('id', $request->id)->first();
        if($user)
        {
            $user->status = 'active';
            $user->save();
            return "User Accepted";
        }
        return "nothing";
    }

    public function APIRemoveUser(Request $request)
    {
        $user= AllUser::where('id', $request->id)->first();
        if($user)
        {
           
            $user->delete();
            return "Request Cancelled";
        }
        return "nothing";
    }

    public function APIRegistrationSubmitted(Request $request)
    {
       
        $st = new AllUser();
        $st->name = $request->name;
        $st->email = $request->email;
        $st->phone = $request->phone;
        $st->nid = $request->nid;
        $st->address = $request->address;
        $st->password =$request->password;
        $st->type = $request->type;
        $st->status = $request->status;
       
        if($st)
        {
            $st->save();
            return "success";
        }
        else
        {
            return 'nothing';
        }
            
        
    }
    public function APILogin(Request $request)
    {
    
        $stu = AllUser::where('email',$request->email)
                       ->where('password',$request->password)
                        ->first();
        if($stu){
           
            return $stu->type;
        }
        return "Something went wrong";              
    }

    public function APIAdminprofile(Request $request)
    {
        
        $stu = Alluser::where('id',$request->id)->first();
        if($stu)
        {
           return $stu;
        }
        return "nothing found";
    }
   
    public function APIUserEdited(Request $request)
    {
      
        $st = Alluser::where('id',$request->id)->first();
        $st->name = $request->name;
        $st->email = $request->email;
        $st->phone = $request->phone;
        $st->nid = $request->nid;
        $st->address = $request->address;
        if($request->password)
        {
            $st->password= $request->password;
        }
       if($st)
       {
        $st->save();
        return "Successfuly Updated";
        
       }
      
    }

    public function DeliveryHistory()
    
    {
      
        return Delivery::all();
    }

    public function APIUserData(){
       // seller
    
        $date30 =Carbon::today()->subDays(30);
        $date60 =Carbon::today()->subDays(60);

        $total_seller =  AllUser::where('type','seller')->count();

        $seller_last_30_day = AllUser::where('type','seller')->where('created_at', '>=', $date30)->count();
        $seller_last_60_day =AllUser::where('type', 'seller')->where('created_at','>=', $date60)->count();
        $seller_last_month = $seller_last_60_day - $seller_last_30_day;
        if($seller_last_month ===0){
            $seller_last_month =1;
        }
        $seller_gob = (($seller_last_30_day-$seller_last_month)*100)/$seller_last_month;
       
        //buyer
        $total_buyer =  AllUser::where('type','buyer')->count();

        $buyer_last_30_day = AllUser::where('type','buyer')->where('created_at', '>=', $date30)->count();
        $buyer_last_60_day =AllUser::where('type', 'buyer')->where('created_at','>=', $date60)->count();
        $buyer_last_month = $buyer_last_60_day - $buyer_last_30_day;
        if($buyer_last_month ===0){
            $buyer_last_month =1;
        }
        $buyer_gob = (($buyer_last_30_day-$buyer_last_month)*100)/$buyer_last_month;
        //deliveryman
        $total_deliveryman =  AllUser::where('type','deliveryman')->where('status','active')->count();
        $deliveryman_last_30_day = AllUser::where('type','deliveryman')->where('status','active')->where('created_at', '>=', $date30)->count();
        $deliveryman_last_60_day =AllUser::where('type', 'deliveryman')->where('status','active')->where('created_at','>=', $date60)->count();
        $deliveryman_last_month = $deliveryman_last_60_day - $deliveryman_last_30_day;
        if($deliveryman_last_month ===0){
            $deliveryman_last_month =1;
        }
        $deliveryman_gob = (($deliveryman_last_30_day-$deliveryman_last_month)*100)/$deliveryman_last_month;
        //product
        $total_product =  Product::count();
        $product_last_30_day = Product::where('created_at', '>=', $date30)->count();
        $product_last_60_day =Product::where('created_at','>=', $date60)->count();
        $product_last_month = $product_last_60_day - $product_last_30_day;
        if($product_last_month ===0){
            $product_last_month =1;
        }
        $product_gob = (($product_last_30_day-$product_last_month)*100)/$product_last_month;

      return [
        'seller'=>$seller_gob,
        'buyer'=>$buyer_gob,
        'deliveryman'=>$deliveryman_gob,
        'product'=>$product_gob,
        'total_seller'=>$total_seller,
        'total_buyer'=>$total_buyer,
        'total_deliveryman'=>$total_deliveryman,
        'total_product'=>$total_product
      ];

    }
    public function TodaysDeliverymanRequest(){
        $date =Carbon::today();
        $deliveryman = AllUser::where('type','deliveryman')->where('status','requested')->where('created_at', '>=', $date)->get();
        return $deliveryman;
    }
}
