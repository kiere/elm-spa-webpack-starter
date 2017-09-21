module Main exposing (..)

import Html exposing (Html, div, text, button)
import Html.Events exposing (onClick)


-- MODEL


type alias Model =
    { message : String
    }


type Msg
    = Hello



-- UPDATE


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Hello ->
            ( { model | message = "Hello, Webpack... and Elm!" }, Cmd.none )



-- VIEW


view : Model -> Html Msg
view model =
    div []
        [ div [] [ text model.message ]
        , button [ onClick Hello ] [ text "Say Hello!" ]
        ]



-- PROGRAM


initialModel : { message : String }
initialModel =
    { message = "Say Hello my little friend..." }


init : ( Model, Cmd Msg )
init =
    ( initialModel, Cmd.none )


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none


main : Program Never Model Msg
main =
    Html.program
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
