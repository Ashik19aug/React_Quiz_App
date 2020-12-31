<?php

namespace App\Http\Controllers;

use App\Models\Basic;
use Illuminate\Http\Request;

class BasicController extends Controller
{

    public function showAllBasic()
    {
        return response()->json(Basic::all());
    }

    public function showOneBasic($id)
    {
        return response()->json(Basic::find($id));
    }

    public function createBasic(Request $request)
    {
        $author = Basic::create($request->all());

        return response()->json($author, 201);
    }

    public function updateBasic($id, Request $request)
    {
        $author = Basic::findOrFail($id);
        $author->update($request->all());

        return response()->json($author, 200);
    }

    public function deleteBasic($id)
    {
        Basic::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}