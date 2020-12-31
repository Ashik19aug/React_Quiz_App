<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuizsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('quizs', function (Blueprint $table) {
            $table->increments('id');
            $table->string('quiz_language');
            $table->string('quiz_type');
            $table->text('quiz_question');
            $table->text('quiz_optiona');
            $table->text('quiz_optionb');
            $table->text('quiz_optionc');
            $table->text('quiz_optiond');
            $table->integer('quiz_answer');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('quizs');
    }
}
