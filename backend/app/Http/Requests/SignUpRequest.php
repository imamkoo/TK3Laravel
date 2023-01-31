<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rules\Password;
use Illuminate\Foundation\Http\FormRequest;

class SignUpRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => [
                'required', 'string', 'confirmed', Password::min(10) //minimum 10 characters
                    ->mixedCase() //uppercase and lowercase
                    ->letters() //must be have at least one letter
                    ->numbers() //must be have at least one number
                    ->symbols() //must be have at least one symbol
            ],
        ];
    }
}