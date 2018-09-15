package ui.selectionmenu;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;

import com.irozon.alertview.AlertActionStyle;
import com.irozon.alertview.AlertStyle;
import com.irozon.alertview.AlertView;
import com.irozon.alertview.interfaces.AlertActionListener;
import com.irozon.alertview.objects.AlertAction;

import org.jetbrains.annotations.NotNull;

import java.util.ArrayList;
import java.util.logging.Logger;

public class RNActivity extends AppCompatActivity {

    public void onStart() {
        super.onStart();


        ArrayList actions = new ArrayList();

        AlertView alert = new AlertView("", "Message", AlertStyle.BOTTOM_SHEET);
//        if (presentationType == 0) {
            alert = new AlertView("", "Message", AlertStyle.BOTTOM_SHEET);
//        } else if (presentationType == 1) {
//            alert = new AlertView(title, "Message", AlertStyle.DIALOG);
//        }

//        for (int i = 0;i < values.size();i++) {
//            actions.add(new AlertAction(values.getString(i), AlertActionStyle.DEFAULT, new AlertActionListener() {
//                @Override
//                public void onActionClick(@NotNull AlertAction action) {
//                }
//            }));
//        }

        alert.show(this);
    }
}
