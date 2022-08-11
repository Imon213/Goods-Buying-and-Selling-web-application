<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\AllUser;
use App\Models\Delivery;
use App\Http\Requests\StoreOrderRequest;
use App\Http\Requests\UpdateOrderRequest;
use Illuminate\Http\Request;
class OrderController extends Controller
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
     * @param  \App\Http\Requests\StoreOrderRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreOrderRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function show(Order $order)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateOrderRequest  $request
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateOrderRequest $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function destroy(Order $order)
    {
        //
    }
    public function APIOrder()
    {
        return Order::all();
    }
    public function APIOrderedUser(Request $request)
    {
        return AllUser::where('id', $request->id)->first();
    }
    
    public function APIOrderDetails(){
        $all_item = Order::count();
        if($all_item == 0)
        {
            $all_item =1;
        }
        $pending = Order::where('status','pending')->count();
        $accept = Order::where('status','accepted')->count();
        $on_the_way = Order::where('status','ontheway')->count();
        $delivered = Order::where('status','delivered')->count();
        $pending_percentage = (($pending) / ($all_item))*100;
        $accept_percentage = ($accept/$all_item)*100;
        $on_the_way_percentage = ($on_the_way/$all_item)*100;
        $delivered_percentage = ($delivered/$all_item)*100;
        return [
            'all_item' =>$all_item,
            'pending' =>$pending,
            'accept' =>$accept,
            'on_the_way' =>$on_the_way,
            'delivered' =>$delivered,
            'pending_percentage' =>$pending_percentage,
            'accept_percentage' =>$accept_percentage,
            'on_the_way_percentage' =>$on_the_way_percentage,
            'delivered_percentage' =>$delivered_percentage
        ];

    }

    public function DelOrderReq()
    {
        return Order::where('status','accepted')->get();
    }
    public function OnTheWayOrder()
    {
        return Order::where('status','ontheway')->get();
    }
    public function DelOrderConfirm(Request $request)
    {
        $order= Order::where('id',$request->id)->first();
       
        
        $order->status = 'ontheway';
     
        if($order)
        {
            $order->save();
            return $order->status;
        }
        return "something went wrong";
      

    }

    public function Delivered(Request $request)
    {
        $order = Order::where('id',$request->p_id)->first();
        $order->status = $request->status;
        $order->save();
        $delivery = new Delivery();
        $delivery->o_id = $request->p_id;
        $delivery->status = $request->status;
        $delivery->deliveryman_id = $request->u_id;
       
        $delivery->save();
        return "success";

    }
}
