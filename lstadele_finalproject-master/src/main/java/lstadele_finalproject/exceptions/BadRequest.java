package lstadele_finalproject.exceptions;

public class BadRequest extends RuntimeException {

    public BadRequest() {}

    public BadRequest(String message) {
        super(message);
    }
}
