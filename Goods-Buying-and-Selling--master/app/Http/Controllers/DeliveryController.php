<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Delivery;
use App\Http\Requests\StoreDeliveryRequest;
use App\Http\Requests\UpdateDeliveryRequest;
use Illuminate\Support\Facades\DB;
class DeliveryController extends Controller
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
     * @param  \App\Http\Requests\StoreDeliveryRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreDeliveryRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Delivery  $delivery
     * @return \Illuminate\Http\Response
     */
    public function show(Delivery $delivery)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Delivery  $delivery
     * @return \Illuminate\Http\Response
     */
    public function edit(Delivery $delivery)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateDeliveryRequest  $request
     * @param  \App\Models\Delivery  $delivery
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateDeliveryRequest $request, Delivery $delivery)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Delivery  $delivery
     * @return \Illuminate\Http\Response
     */
    public function destroy(Delivery $delivery)
    {
        //
    }
    public function DeliveryHistory(Request $request)
    {
        $delivery = DB::table('deliveries')
        ->join('orders', 'deliveries.o_id', '=', 'orders.id')
        // ->join('ranks', 'users.rank_id', '=', 'ranks.id')
        // ->join('regions', 'users.region_id', '=', 'regions.id')
        //->join('postcomments', 'posts.id', '=', 'postcomments.post_id')
        ->select(
            'deliveries.id as id',
            'orders.price as price',
            'orders.status as status',
            'orders.created_at as created_at',
            'deliveries.updated_at as updated_at',
          //'postcomments.comment as postcomment',
          //'postcomments.author_id as commentauthor'
          )
        ->where('deliveries.deliveryman_id', '=', $request->id)
        ->get();
        // print_r($posts);
        return $delivery;

    
    }
    
}
