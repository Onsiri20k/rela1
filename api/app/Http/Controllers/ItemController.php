<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Resources\Item as ItemResource;
use App\Models\Item;

class ItemController extends Controller
{
    public function index()
    {
        return ItemResource::collection(Item::all());
    }


    public function store(Request $request)
    {
        $request->validate([
            'pat' => 'required',
            'game' => 'required',
            'desc' => 'required',
        ]);
        $item = new Item([
            'pat' => $request->pat,
            'game' => $request->game,
            'desc' => $request->desc,
        ]);
        $item->save();
        return response()->json([
            'data' => 'Post created!'
        ]);
    }

    public function edit($id)
    {
        return new ItemResource(Item::findOrFail($id));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'pat' => 'required',
            'game' => 'required',
            'desc' => 'required',
        ]);
        $item = Item::findOrFail($id);
        $item->pat = $request->pat;
        $item->game = $request->game;
        $item->desc = $request->desc;
        $item->save();

        return response()->json([
            'data' => 'Post updated!'
        
        ]);
    }

    public function destroy($id)
    {
        $item = Item::findOrFail($id);
        $item->delete();

        return response()->json([
            'data' => 'Item deleted!'
        ]);
    }
}