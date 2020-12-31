<?php

namespace App\Http\Controllers;

use App\Models\Quiz;
use Illuminate\Http\Request;

class QuizController extends Controller
{

    public function showAllQuiz()
    {
        return response()->json(Quiz::all());
    }

    public function showOneQuiz($id)
    {
        return response()->json(Quiz::find($id));
    }

    public function createQuiz(Request $request)
    {
        $author = Quiz::create($request->all());

        return response()->json($author, 201);
    }

    public function updateQuiz($id, Request $request)
    {
        $author = Quiz::findOrFail($id);
        $author->update($request->all());

        return response()->json($author, 200);
    }

    public function deleteQuiz($id)
    {
        Quiz::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}